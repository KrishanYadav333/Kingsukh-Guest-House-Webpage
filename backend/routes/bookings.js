const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const bookingsFile = path.join(__dirname, '../data/bookings.json');

// Helper functions
const readBookings = () => {
  try {
    const data = fs.readFileSync(bookingsFile, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const writeBookings = (bookings) => {
  fs.writeFileSync(bookingsFile, JSON.stringify(bookings, null, 2));
};

// Create new booking
router.post('/', (req, res) => {
  try {
    const { checkIn, checkOut, guests, roomType, customerName, email, phone } = req.body;
    
    const days = Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24));
    const roomPrices = { 'cozy-haven': 1000, 'spacious-serenity': 1500 };
    const totalPrice = days * roomPrices[roomType];

    const bookings = readBookings();
    const newBooking = {
      id: Date.now().toString(),
      checkIn,
      checkOut,
      guests,
      roomType,
      customerName,
      email,
      phone,
      totalPrice,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    bookings.push(newBooking);
    writeBookings(bookings);
    
    res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all bookings
router.get('/', (req, res) => {
  try {
    const bookings = readBookings();
    res.json(bookings.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Check availability
router.post('/check-availability', (req, res) => {
  try {
    const { checkIn, checkOut, roomType } = req.body;
    const bookings = readBookings();
    
    const conflictingBookings = bookings.filter(booking => 
      booking.roomType === roomType &&
      booking.status !== 'cancelled' &&
      new Date(booking.checkIn) < new Date(checkOut) &&
      new Date(booking.checkOut) > new Date(checkIn)
    );

    res.json({ available: conflictingBookings.length === 0 });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;