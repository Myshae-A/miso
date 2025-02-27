// Create a new file: src/services/apiService.js
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://miso-eight.vercel.app/api';

export const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// Add more API methods as needed