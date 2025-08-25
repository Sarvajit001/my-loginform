import React from "react";  
import './login.css';
import {mockLoginApi} from '../services/mockApi'; // Import the mock API service
import { useLoginForm } from "../hooks/useLoginForm";
import { useState } from "react";

function LoginForm() {
    const {
    formData,
    errors,
    isSubmitting,
    handleInputChange,
    validateForm,
    setIsSubmitting
  } = useLoginForm();

 const [response, setResponse] = useState(null);

   const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setResponse(null);


    try {
      const result = await mockLoginApi.login(formData);
      setResponse(result);
    } catch (error) {
      setResponse({
        success: false,
        message: 'Network error. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

 return (
    <div className="login-container">
      <div className="login-form-wrapper">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Please sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form" noValidate>
          {/* Username Field */}
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username *
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className={`form-input ${errors.username ? 'error' : ''}`}
              placeholder="Enter your username"
              disabled={isSubmitting}
            />
            {errors.username && (
              <span className="error-message">{errors.username}</span>
            )}
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password *
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={`form-input ${errors.password ? 'error' : ''}`}
              placeholder="Enter your password"
              disabled={isSubmitting}
            />
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>

          {/* User Type Dropdown */}
          <div className="form-group">
            <label htmlFor="userType" className="form-label">
              User Type
            </label>
            <select
              id="userType"
              name="userType"
              value={formData.userType}
              onChange={handleInputChange}
              className="form-input"
              disabled={isSubmitting}
            >
              <option value="user">Regular User</option>
              <option value="admin">Administrator</option>
              <option value="moderator">Moderator</option>
              <option value="guest">Guest</option>
            </select>
          </div>

          {/* Remember Me Checkbox */}
          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="checkbox-input"
              />
              <span className="checkmark"></span>
              Remember me
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                Signing in...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        {/* Demo Credentials */}
        <div className="demo-credentials">
          <h4>Demo Credentials:</h4>
          <p>Username: <strong>demo</strong></p>
          <p>Password: <strong>password123</strong></p>
        </div>

        {/* Response Message */}
        {response && (
          <div className={`response-message ${response.success ? 'success' : 'error'}`}>
            <h4>{response.success ? 'Success!' : 'Error'}</h4>
            <p>{response.message}</p>
            {response.success && response.data && (
              <div className="response-details">
                <p><strong>Token:</strong> {response.data.token}</p>
                <p><strong>User Type:</strong> {response.data.user.userType}</p>
                <p><strong>Remember Me:</strong> {response.data.user.rememberMe ? 'Yes' : 'No'}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;

