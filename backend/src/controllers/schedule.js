import StudySession from '../models/StudySession.js';

// Create a new study session
export const createSession = async (req, res) => {
  try {
    const session = await StudySession.create({
      ...req.body,
      userId: req.user._id
    });
    res.status(201).json(session);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get all study sessions for a user
export const getUserSessions = async (req, res) => {
  try {
    const sessions = await StudySession.find({ userId: req.user._id })
      .populate('documentId', 'title');
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get a single study session
export const getSession = async (req, res) => {
  try {
    const session = await StudySession.findOne({
      _id: req.params.id,
      userId: req.user._id
    }).populate('documentId', 'title');
    
    if (!session) {
      return res.status(404).json({ error: 'Study session not found' });
    }
    
    res.json(session);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Update a study session
export const updateSession = async (req, res) => {
  try {
    const session = await StudySession.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      req.body,
      { new: true }
    ).populate('documentId', 'title');
    
    if (!session) {
      return res.status(404).json({ error: 'Study session not found' });
    }
    
    res.json(session);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a study session
export const deleteSession = async (req, res) => {
  try {
    const session = await StudySession.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id
    });
    
    if (!session) {
      return res.status(404).json({ error: 'Study session not found' });
    }
    
    res.json({ message: 'Study session deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
