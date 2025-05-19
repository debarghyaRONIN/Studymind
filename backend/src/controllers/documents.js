import Document from '../models/Document.js';

// Create a new document
export const createDocument = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const document = await Document.create({
      title,
      content,
      tags,
      userId: req.user._id
    });
    res.status(201).json(document);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get all documents for a user
export const getUserDocuments = async (req, res) => {
  try {
    const documents = await Document.find({ userId: req.user._id });
    res.json(documents);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get a single document
export const getDocument = async (req, res) => {
  try {
    const document = await Document.findOne({
      _id: req.params.id,
      userId: req.user._id
    });
    
    if (!document) {
      return res.status(404).json({ error: 'Document not found' });
    }
    
    res.json(document);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Update a document
export const updateDocument = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const document = await Document.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      { title, content, tags },
      { new: true }
    );
    
    if (!document) {
      return res.status(404).json({ error: 'Document not found' });
    }
    
    res.json(document);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a document
export const deleteDocument = async (req, res) => {
  try {
    const document = await Document.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id
    });
    
    if (!document) {
      return res.status(404).json({ error: 'Document not found' });
    }
    
    res.json({ message: 'Document deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
