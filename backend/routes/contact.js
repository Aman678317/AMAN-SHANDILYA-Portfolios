const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newContact = new Contact({
      name,
      email,
      subject,
      message
    });

    await newContact.save();

    res.status(201).json({ message: 'Message sent successfully! I will get back to you soon.' });
  } catch (err) {
    console.error('Contact Form Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
