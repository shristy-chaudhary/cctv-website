
const API_URL = 'http://localhost:5000/api/auth';

export async function login(email, password) {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    
    if (response.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.userId);
      localStorage.setItem('user', JSON.stringify(data.user));
      return { success: true, user: data.user };
    } else {
      return { success: false, error: data.message };
    }
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, error: 'Network error occurred' };
  }
}

export async function register(username, email, contactNumber, password, notificationPreference) {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        contactNumber,
        password,
        notificationPreference
      }),
    });

    const data = await response.json();
    
    if (response.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.userId);
      return { success: true };
    } else {
      return { success: false, error: data.message };
    }
  } catch (error) {
    console.error('Registration error:', error);
    return { success: false, error: 'Network error occurred' };
  }
}

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('user');
}

export async function isAuthenticated() {
  const token = localStorage.getItem('token');
  
  if (!token) {
    return { isAuthenticated: false };
  }

  try {
    const response = await fetch(`${API_URL}/check-auth`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await response.json();
    
    if (data.isAuthenticated) {
      localStorage.setItem('user', JSON.stringify(data.user));
    }
    
    return data;
  } catch (error) {
    console.error('Auth check error:', error);
    return { isAuthenticated: false };
  }
}

// Helper function to get the authentication token
export function getAuthToken() {
  return localStorage.getItem('token');
}

// Helper function to get the user ID
export function getUserId() {
  return localStorage.getItem('userId');
}

// Helper function to get the current user's details
export function getCurrentUser() {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
}