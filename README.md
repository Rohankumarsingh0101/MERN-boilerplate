# MERN Stack Boilerplate

A complete, production-ready MERN (MongoDB, Express.js, React, Node.js) stack boilerplate with authentication, user management, and modern development tooling.

## 🚀 Features

### Backend
- **Express.js** server with comprehensive middleware setup
- **MongoDB** integration with Mongoose ODM
- **JWT Authentication** with secure password hashing
- **Role-based access control** (User/Admin roles)
- **Input validation** and error handling
- **Rate limiting** and security headers
- **API documentation** ready structure
- **Comprehensive test suite** with Jest

### Frontend
- **React 18** with modern hooks and context
- **React Router** for client-side routing
- **Axios** for API communication
- **Responsive design** with Tailwind CSS
- **Protected routes** and authentication context
- **Form validation** and error handling
- **Modern UI components** and animations

### Development Tools
- **Vite** for fast development and building
- **Concurrently** to run client and server together
- **Nodemon** for server hot-reload
- **ESLint & Prettier** for code quality
- **Docker** configuration for containerized development
- **Jest** for testing with coverage reports

## 📁 Project Structure

```
mern-boilerplate/
├── server/                 # Backend API
│   ├── server.js          # Express app entry point
│   ├── config/            # Database and configuration
│   ├── models/            # Mongoose schemas
│   ├── routes/            # Express routes
│   ├── controllers/       # Route logic
│   ├── middleware/        # Custom middleware
│   ├── utils/             # Utility functions
│   └── tests/             # Test files
├── src/                   # Frontend React app
│   ├── components/        # Reusable components
│   ├── pages/             # Page components
│   ├── contexts/          # React contexts
│   ├── api/               # API helper functions
│   └── App.js             # Main App component
├── public/                # Static assets
├── .env.example          # Environment variables template
├── docker-compose.yml    # Docker configuration
├── Dockerfile           # Docker image configuration
└── README.md           # This file
```

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js** (v16 or higher)
- **MongoDB** (local installation or MongoDB Atlas)
- **Git**

### 1. Clone the Repository
```bash
git clone <repository-url>
cd mern-boilerplate
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
```bash
# Copy the example environment file
cp .env.example .env

# Edit .env with your configuration
nano .env
```

Required environment variables:
```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/mern_boilerplate
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRE=30d
CLIENT_URL=http://localhost:5173
```

### 4. Start Development Server
```bash
# Start both client and server
npm run dev

# Or start them separately
npm run server  # Backend only
npm run client  # Frontend only
```

The application will be available at:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000

## 🐳 Docker Development

### Using Docker Compose (Recommended)
```bash
# Start all services (app + MongoDB)
npm run docker:dev

# Build and start (if you made changes)
npm run docker:dev:build

# Stop all services
npm run docker:down
```

### Using Docker Manually
```bash
# Build the image
npm run docker:build

# Run the container
npm run docker:run
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm test -- --coverage
```

## 📚 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get Current User
```http
GET /api/auth/me
Authorization: Bearer <token>
```

### User Management Endpoints

#### Get User Profile
```http
GET /api/users/me
Authorization: Bearer <token>
```

#### Update Profile
```http
PUT /api/auth/updatedetails
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "John Updated",
  "email": "john.updated@example.com"
}
```

#### Update Password
```http
PUT /api/auth/updatepassword
Authorization: Bearer <token>
Content-Type: application/json

{
  "currentPassword": "oldpassword",
  "newPassword": "newpassword123"
}
```

### Health Check
```http
GET /api/health
```

## 🔒 Security Features

- **Password Hashing**: Uses bcryptjs for secure password hashing
- **JWT Tokens**: Secure authentication with JSON Web Tokens
- **Rate Limiting**: Prevents brute force attacks
- **Helmet**: Sets various HTTP headers for security
- **CORS**: Configured for cross-origin requests
- **Input Validation**: Server-side validation for all inputs
- **SQL Injection Protection**: Mongoose provides built-in protection

## 🎨 Frontend Features

### Components
- **Navbar**: Responsive navigation with authentication state
- **PrivateRoute**: Protected route wrapper
- **Forms**: Login, Register, Profile with validation
- **Dashboard**: User dashboard with statistics

### Pages
- **Home**: Landing page with feature overview
- **Login/Register**: Authentication forms
- **Dashboard**: User dashboard
- **Profile**: User profile management

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach
- **Custom Components**: Styled form elements and buttons
- **Animations**: Smooth transitions and hover effects

## 🔧 Development Commands

```bash
# Development
npm run dev          # Start both client and server
npm run server       # Start server only
npm run client       # Start client only

# Building
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Check for linting errors
npm run lint:fix     # Fix linting errors
npm run format       # Format code with Prettier

# Testing
npm test            # Run tests once
npm run test:watch  # Run tests in watch mode

# Docker
npm run docker:dev        # Start with Docker Compose
npm run docker:dev:build  # Build and start with Docker
npm run docker:down       # Stop Docker services
```

## 📦 Deployment

### Production Build
```bash
# Build the React app
npm run build

# Start production server
npm start
```

### Environment Variables for Production
```env
NODE_ENV=production
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
JWT_SECRET=your-production-jwt-secret-key
JWT_EXPIRE=30d
CLIENT_URL=https://yourdomain.com
```

### Docker Production Deployment
```bash
# Build production image
docker build -t mern-boilerplate:prod --target production .

# Run production container
docker run -p 5000:5000 --env-file .env.prod mern-boilerplate:prod
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [MongoDB](https://www.mongodb.com/) - The database for modern applications
- [Mongoose](https://mongoosejs.com/) - Elegant MongoDB object modeling for Node.js
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework


---

**Happy coding!** 🎉
