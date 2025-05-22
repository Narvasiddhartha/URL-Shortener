# URL Shortener - Modern SaaS Application

A modern, full-stack URL shortening service built with React, Node.js, and MongoDB. This application allows users to create short, memorable links from long URLs while providing analytics and management features.

## 🌟 Features

### For All Users
- Instant URL shortening
- Clean, modern UI with responsive design
- Copy shortened URLs with one click
- Real-time click tracking
- Mobile-friendly interface

### For Registered Users
- Custom URL slugs
- Comprehensive analytics dashboard
- Link management system
- Secure authentication
- Personalized user experience

## 🛠️ Tech Stack

### Frontend
- React.js
- Redux Toolkit for state management
- TanStack Router for routing
- Tailwind CSS for styling
- React Query for data fetching

### Backend
- Node.js
- Express.js
- MongoDB for database
- JWT for authentication
- Mongoose for ODM

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd URL_SHORTNER
```

2. Install dependencies for both frontend and backend
```bash
# Install backend dependencies
cd BACKEND
npm install

# Install frontend dependencies
cd ../FRONTEND
npm install
```

3. Set up environment variables
```bash
# In BACKEND directory, create a .env file with:
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

4. Start the development servers
```bash
# Start backend server (from BACKEND directory)
npm run dev

# Start frontend server (from FRONTEND directory)
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## 📱 Usage

1. **URL Shortening**
   - Visit the homepage
   - Paste your long URL
   - Click "Shorten URL"
   - Copy the generated short URL

2. **User Features**
   - Register/Login to access advanced features
   - Create custom slugs for your URLs
   - Track clicks and analytics in the dashboard
   - Manage all your shortened URLs

## 🔒 Security Features

- JWT-based authentication
- Secure password hashing
- Protected routes
- Rate limiting
- Input validation

## 🎨 UI/UX Features

- Clean, modern interface
- Responsive design
- Animated transitions
- User-friendly navigation
- Intuitive dashboard
- Real-time updates

## 👨‍💻 Developer

Developed by Narva Siddhartha

- Email: narvasiddhartha@gmail.com
- LinkedIn: [Narva Siddhartha](https://www.linkedin.com/in/narva-siddhartha-4b04bb211/)

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- React.js community
- Tailwind CSS team
- MongoDB team
- All contributors and users of this project 