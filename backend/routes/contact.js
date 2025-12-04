const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const contactsFile = path.join(__dirname, '../data/contacts.json');

const readContacts = () => {
  try {
    const data = fs.readFileSync(contactsFile, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const writeContacts = (contacts) => {
  fs.writeFileSync(contactsFile, JSON.stringify(contacts, null, 2));
};

// Submit contact form
router.post('/', (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;
    
    const contacts = readContacts();
    const newContact = {
      id: Date.now().toString(),
      firstName,
      lastName,
      email,
      phone,
      message,
      status: 'new',
      createdAt: new Date().toISOString()
    };

    contacts.push(newContact);
    writeContacts(contacts);
    
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all contact messages
router.get('/', (req, res) => {
  try {
    const contacts = readContacts();
    res.json(contacts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;