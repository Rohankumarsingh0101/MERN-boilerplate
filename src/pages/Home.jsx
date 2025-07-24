import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Home = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="flex items-center justify-center p-4 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-black/20 backdrop-blur-lg rounded-xl shadow-lg p-8">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to MERN Stack Boilerplate
          </h1>

          <p className="text-xl mb-8 leading-relaxed">
            A complete, production-ready MERN (MongoDB, Express, React, Node.js)
            boilerplate with authentication, user management, and modern
            development tools.
          </p>

          {isAuthenticated ? (
            <div className="space-y-4">
              <p className="text-2xl font-semibold">Hello, {user?.name}! 👋</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/dashboard"
                  className="px-6 py-2 rounded-md text-lg font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                >
                  Go to Dashboard
                </Link>
                <Link
                  to="/profile"
                  className="px-6 py-2 rounded-md text-lg font-medium bg-black/30 text-white hover:bg-black/40 transition-colors"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <p className="text-lg">
                Get started by creating an account or logging in.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/register"
                  className="px-6 py-2 rounded-md text-lg font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  to="/login"
                  className="px-6 py-2 rounded-md text-lg font-medium bg-black/30 text-white hover:bg-black/40 transition-colors"
                >
                  Login
                </Link>
              </div>
            </div>
          )}

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-black/20 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">🔐 Authentication</h3>
              <p>
                Secure JWT-based authentication with protected routes and user
                management.
              </p>
            </div>
            <div className="p-6 bg-black/20 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">⚡ Modern Stack</h3>
              <p>
                Built with React, Node.js, Express, and MongoDB for scalable
                applications.
              </p>
            </div>
            <div className="p-6 bg-black/20 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                🚀 Production Ready
              </h3>
              <p>
                Includes Docker, testing, error handling, and development
                tooling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
