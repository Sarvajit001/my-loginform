// Mock API service for login
 export const mockLoginApi = {
  login: async (formData) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock validation logic
    const { username, password, userType, rememberMe } = formData;
    
    if (username === 'demo' && password === 'password123') {
      return {
        success: true,
        message: `Login successful! Welcome back ${username} (${userType})`,
        data: {
          token: 'mock-jwt-token-12345',
          user: {
            username,
            userType,
            rememberMe
          }
        }
      };
    } else {
      return {
        success: false,
        message: 'Invalid credentials. Please try again.',
        error: 'AUTH_ERROR'
      };
    }
  }
};

// export { mockLoginApi };
// export default mockLoginApi;