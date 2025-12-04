# Kingsukh Guest House - MERN Stack Website

A full-stack web application for Kingsukh Guest House built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- **Modern React Frontend**: Built with TypeScript and styled-components
- **RESTful API Backend**: Express.js server with MongoDB integration
- **Real-time Booking System**: Check availability and make reservations
- **Contact Management**: Handle customer inquiries and messages
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Room Management**: Dynamic room data with pricing and features

## Tech Stack

### Frontend
- React 18 with TypeScript
- React Router for navigation
- Styled Components for styling
- Axios for API calls
- Responsive design

### Backend
- Node.js with Express.js
- MongoDB with Mongoose ODM
- CORS enabled
- Environment variables with dotenv
- RESTful API architecture

## Project Structure

```
kingsukh-mern/
├── backend/
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API routes
│   ├── controllers/     # Route handlers
│   ├── middleware/      # Custom middleware
│   ├── server.js        # Main server file
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── services/    # API service layer
│   │   └── types/       # TypeScript types
│   └── package.json
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Backend Setup
1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file with your configuration:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/kingsukh
   JWT_SECRET=your_jwt_secret_key_here
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## API Endpoints

### Bookings
- `POST /api/bookings` - Create new booking
- `GET /api/bookings` - Get all bookings
- `POST /api/bookings/check-availability` - Check room availability

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all messages

### Rooms
- `GET /api/rooms` - Get room information

## Features Overview

### Home Page
- Hero section with booking form
- Real-time availability checking
- Responsive design

### Rooms Page
- Dynamic room listings from database
- Room features and pricing
- Direct booking integration

### Contact Page
- Contact form with validation
- Booking completion flow
- Customer information collection

### About & Services Pages
- Guest house information
- Service listings
- Statistics display

### Gallery Page
- Image showcase
- Hover effects and animations

## Deployment

### Backend Deployment
1. Set up MongoDB Atlas or use local MongoDB
2. Configure environment variables
3. Deploy to platforms like Heroku, Railway, or DigitalOcean

### Frontend Deployment
1. Build the React app:
   ```bash
   npm run build
   ```
2. Deploy to platforms like Netlify, Vercel, or AWS S3

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For any inquiries about this project:
- Email: kkghosh0099@gmail.com
- Phone: +91 9007062180
- Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156