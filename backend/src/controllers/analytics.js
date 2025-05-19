import StudySession from '../models/StudySession.js';
import Document from '../models/Document.js';

// Get study habits analytics
export const getStudyHabits = async (req, res) => {
  try {
    const sessions = await StudySession.find({ 
      userId: req.user._id,
      completed: true
    });

    // Calculate average study duration
    const totalDuration = sessions.reduce((acc, session) => acc + session.duration, 0);
    const averageDuration = sessions.length > 0 ? totalDuration / sessions.length : 0;

    // Group sessions by time of day
    const timeOfDayDistribution = sessions.reduce((acc, session) => {
      const hour = new Date(session.startTime).getHours();
      if (hour >= 5 && hour < 12) acc.morning++;
      else if (hour >= 12 && hour < 17) acc.afternoon++;
      else if (hour >= 17 && hour < 22) acc.evening++;
      else acc.night++;
      return acc;
    }, { morning: 0, afternoon: 0, evening: 0, night: 0 });

    res.json({
      totalSessions: sessions.length,
      averageDuration,
      timeOfDayDistribution
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get topic mastery analytics
export const getTopicMastery = async (req, res) => {
  try {
    const documents = await Document.find({ userId: req.user._id });
    const sessions = await StudySession.find({ 
      userId: req.user._id,
      completed: true
    });

    // Calculate time spent per document
    const topicMastery = documents.map(doc => {
      const docSessions = sessions.filter(s => s.documentId?.toString() === doc._id.toString());
      const totalTimeSpent = docSessions.reduce((acc, s) => acc + s.duration, 0);
      
      return {
        topicId: doc._id,
        topic: doc.title,
        timeSpent: totalTimeSpent,
        sessionsCount: docSessions.length
      };
    });

    res.json(topicMastery);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get learning overview
export const getLearningOverview = async (req, res) => {
  try {
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);

    const sessions = await StudySession.find({
      userId: req.user._id,
      startTime: { $gte: lastMonth }
    });

    // Group sessions by day
    const dailyProgress = sessions.reduce((acc, session) => {
      const date = new Date(session.startTime).toISOString().split('T')[0];
      if (!acc[date]) acc[date] = 0;
      acc[date] += session.duration;
      return acc;
    }, {});

    res.json({
      dailyProgress,
      totalSessions: sessions.length,
      totalTimeSpent: sessions.reduce((acc, s) => acc + s.duration, 0)
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get knowledge gaps
export const getKnowledgeGaps = async (req, res) => {
  try {
    const documents = await Document.find({ userId: req.user._id });
    const sessions = await StudySession.find({ userId: req.user._id });

    // Find documents with few or no study sessions
    const knowledgeGaps = documents.map(doc => {
      const docSessions = sessions.filter(s => s.documentId?.toString() === doc._id.toString());
      return {
        documentId: doc._id,
        title: doc.title,
        sessionsCount: docSessions.length,
        lastStudied: docSessions.length > 0 
          ? Math.max(...docSessions.map(s => new Date(s.startTime)))
          : null,
        needsReview: docSessions.length < 3
      };
    });

    res.json(knowledgeGaps);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
