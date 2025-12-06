# Kingsukh Guest House - Luxury Hospitality Website

![Website Preview](./Web%20page%20image.png)

🌐 **Live Website**: [https://kingsukh-guest-house-webpage.onrender.com/](https://kingsukh-guest-house-webpage.onrender.com/)

A premium full-stack web application for Kingsukh Guest House featuring luxury design, seamless user experience, and modern web technologies.

## About Kingsukh Guest House

Kingsukh Guest House is a luxury accommodation located in the serene landscape of Baranti, West Bengal. We offer world-class amenities, personalized service, and breathtaking views of the surrounding natural beauty.

## Key Features

### **Luxury Design System**
- Premium golden color scheme with sophisticated gradients
- Elegant animations and hover effects
- Responsive design optimized for all devices
- Modern typography with Playfair Display serif font

### **Core Pages**
- **Home**: Hero section with luxury facilities showcase
- **Rooms**: Dynamic room listings with premium styling
- **Services**: Comprehensive service offerings with scrolling cards
- **Gallery**: Luxury image showcase with train-like scrolling
- **About**: Company story with animated feature cards
- **Contact**: Premium contact form with WhatsApp integration

### **Technical Features**
- Real-time room availability checking
- WhatsApp booking integration
- Dynamic content management
- SEO-optimized structure
- Fast loading performance

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Styled Components** for luxury styling
- **React Router** for navigation
- **Axios** for API communication
- **Responsive Design** with mobile-first approach

### Backend
- **Node.js** with Express.js
- **RESTful API** architecture
- **CORS** enabled for cross-origin requests
- **Environment variables** with dotenv
- **JSON file storage** for lightweight data management

## Project Structure

```
Kingsukh Guest-House Webpage/
├── backend/
│   ├── data/
│   │   ├── bookings.json    # Booking records
│   │   └── contacts.json    # Contact messages
│   ├── models/
│   │   ├── Booking.js       # Booking data model
│   │   └── Contact.js       # Contact data model
│   ├── routes/
│   │   ├── bookings.js      # Booking API routes
│   │   ├── contact.js       # Contact API routes
│   │   └── rooms.js         # Room data routes
│   ├── .env                 # Environment variables
│   ├── server.js            # Main server file
│   └── package.json         # Backend dependencies
├── frontend/
│   ├── public/
│   │   └── images/          # Image assets
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx   # Navigation component
│   │   │   ├── Footer.tsx   # Footer component
│   │   │   └── TopBar.tsx   # Top bar component
│   │   ├── pages/
│   │   │   ├── Home.tsx     # Home page
│   │   │   ├── Rooms.tsx    # Rooms page
│   │   │   ├── Services.tsx # Services page
│   │   │   ├── Gallery.tsx  # Gallery page
│   │   │   ├── About.tsx    # About page
│   │   │   └── Contact.tsx  # Contact page
│   │   ├── services/
│   │   │   └── api.ts       # API service layer
│   │   ├── App.tsx          # Main app component
│   │   └── index.tsx        # App entry point
│   ├── package.json         # Frontend dependencies
│   └── tsconfig.json        # TypeScript configuration
└── README.md
```

## Installation & Setup

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Git**

### Backend Setup
1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   ```bash
   # Create .env file with:
   PORT=5001
   ```

4. **Start the server:**
   ```bash
   npm run dev
   ```
   Server will run on `http://localhost:5001`

### Frontend Setup
1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm start
   ```
   Application will open on `http://localhost:3000`

## API Endpoints

### Room Management
- `GET /api/rooms` - Retrieve all available rooms

### Booking System
- `POST /api/bookings` - Create new booking
- `GET /api/bookings` - Get all bookings
- `POST /api/bookings/check-availability` - Check room availability

### Contact Management
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Retrieve all messages

## Design Features

### Luxury Styling Elements
- **Golden Gradient Scheme**: Premium #d4af37 to #f4d03f gradients
- **Sophisticated Animations**: Smooth hover effects and transitions
- **Premium Typography**: Playfair Display for headings, clean sans-serif for body
- **Elegant Shadows**: Multi-layered shadows with golden tints
- **Rounded Corners**: Modern 15-25px border radius for premium feel

### Interactive Elements
- **Scrolling Galleries**: Train-like horizontal scrolling animations
- **Hover Transformations**: Scale, rotate, and translate effects
- **Dynamic Backgrounds**: Gradient overlays and backdrop filters
- **Responsive Navigation**: Adaptive navbar with scroll-based styling

## Responsive Design

- **Mobile-First Approach**: Optimized for mobile devices
- **Tablet Compatibility**: Seamless experience on tablets
- **Desktop Enhancement**: Full-featured desktop experience
- **Cross-Browser Support**: Compatible with all modern browsers

## Live Deployment

🌐 **Production Website**: [https://kingsukh-guest-house-webpage.onrender.com/](https://kingsukh-guest-house-webpage.onrender.com/)

### Current Deployment Details
- **Platform**: Render (Free Tier)
- **Deployment Type**: Full-stack (Frontend + Backend)
- **Build Process**: Automated from GitHub
- **Domain**: Custom Render subdomain
- **SSL**: HTTPS enabled
- **Status**: ✅ Live and Operational

### Deployment Configuration
- **Root Directory**: `backend`
- **Build Command**: `npm run build` (installs both backend and frontend dependencies)
- **Start Command**: `npm start`
- **Node.js Version**: 22.16.0
- **Auto-Deploy**: Enabled from main branch

### Alternative Deployment Options

#### Backend Deployment
- **Heroku**: Easy deployment with Git integration
- **Railway**: Modern deployment platform
- **DigitalOcean**: VPS deployment
- **Vercel**: Serverless deployment

#### Frontend Deployment
- **Netlify**: Automatic deployment from Git
- **Vercel**: Optimized for React applications
- **AWS S3**: Static website hosting
- **GitHub Pages**: Free hosting for static sites

## Contributing

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open Pull Request**

## License

This project is **proprietary and confidential**. All rights reserved.

**© 2024-present Kingsukh Guest House. Unauthorized copying, distribution, or use is strictly prohibited.**

For licensing inquiries, contact: kryshan753@gmail.com

## Contact Information

### Guest House Contact
- **Phone**: +91 7739449287
- **Email**: kkghosh0099@gmail.com
- **Address**: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
- **WhatsApp Booking**: [Direct WhatsApp Link](https://api.whatsapp.com/send?phone=917739449287)

### Developer Contact
- **Email**: kryshan753@gmail.com
- **Phone**: +917739449287 (WhatsApp)
- **Project Repository**: [GitHub Repository Link]

## Acknowledgments

- **Design Inspiration**: Luxury hospitality websites
- **Color Palette**: Premium golden theme
- **Typography**: Google Fonts - Playfair Display
- **Icons**: Custom SVG icons for premium feel

## Project Documentation

For complete project documentation including detailed analysis, design decisions, implementation phases, and testing results, please refer to:

**[PROJECT_DOCUMENTATION.md](./PROJECT_DOCUMENTATION.md)**

This comprehensive document covers:
- Complete task description and objectives
- Phase-by-phase development breakdown (25 days)
- Technical implementation details
- Testing and optimization results
- Performance metrics and achievements
- Deployment strategy and maintenance guidelines

---

**Built with love for Kingsukh Guest House - Where Luxury Meets Nature**