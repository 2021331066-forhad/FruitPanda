// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const API_CONFIG = {
  baseURL: API_BASE_URL,
  timeout: 30000, // Increased timeout to 30 seconds
  headers: {
    'Content-Type': 'application/json',
  }
};

export default API_CONFIG; 