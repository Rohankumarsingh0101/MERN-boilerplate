import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Handle response interceptor for token expiration
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authAPI = {
  // Auth endpoints
  register: (name, email, password) =>
    api.post('/auth/register', { name, email, password }),

  login: (email, password) => api.post('/auth/login', { email, password }),

  logout: () => api.get('/auth/logout'),

  getMe: () => api.get('/auth/me'),

  updateDetails: data => api.put('/auth/updatedetails', data),

  updatePassword: (currentPassword, newPassword) =>
    api.put('/auth/updatepassword', { currentPassword, newPassword }),
};

export const userAPI = {
  // User endpoints
  getProfile: () => api.get('/users/me'),

  getUsers: () => api.get('/users'),

  getUser: id => api.get(`/users/${id}`),

  updateUser: (id, data) => api.put(`/users/${id}`, data),

  deleteUser: id => api.delete(`/users/${id}`),
};

export default api;
