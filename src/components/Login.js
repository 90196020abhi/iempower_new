import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import './Login.css'; // Import external CSS for styling

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="login-container">
      {/* Left side - Image */}
      <div className="login-image">
        <img 
          src="/assets/images/banner.png" 
          alt="Banner" 
          className="banner-image"
        />
      </div>

      {/* Right side - Login Form */}
      <div className="login-form-container">
        <div className="form-content">
          {/* Login Header */}
          <h1 className="login-header">Login</h1>
          <p className="login-subtext">
            Enter your User ID and password to access your account
          </p>

          {/* Login Form */}
          <form className="login-form">
            {/* User ID Field */}
            <div className="form-field">
              <label className="form-label">User ID</label>
              <input
                type="text"
                placeholder="Enter your User ID"
                className="form-input"
              />
            </div>

            {/* Password Field */}
            <div className="form-field">
              <label className="form-label">Password</label>
              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="form-input"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="form-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="checkbox-input"
                />
                <span>Remember me</span>
              </label>
              <button type="button" className="forgot-password">
                Forgot Password
              </button>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="sign-in-button"
            >
              Sign In
            </button>

            {/* Google Sign In */}
            <button
              type="button"
              className="google-signin-button"
            >
              <img 
                src="/assets/google-icon.png" // Replace with the correct Google icon path
                alt="Google" 
                className="google-icon"
              />
              Sign in with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
