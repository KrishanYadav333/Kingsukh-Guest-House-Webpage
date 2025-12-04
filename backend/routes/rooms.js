const express = require('express');
const router = express.Router();

// Get room data
router.get('/', (req, res) => {
  const rooms = [
    {
      id: 'cozy-haven',
      name: 'Cozy Haven Room',
      description: 'Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.',
      price: 1000,
      features: ['Queen Bed', '2 Guests', '250 sq ft'],
      image: '/images/small.jpg'
    },
    {
      id: 'spacious-serenity',
      name: 'Spacious Serenity Suite',
      description: 'Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.',
      price: 1500,
      features: ['King Bed', '4 Guests', '450 sq ft'],
      image: '/images/large.jpg'
    }
  ];
  
  res.json(rooms);
});

module.exports = router;