import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        storeTokenInLS(data.token);
        toast.success('Login successful');
        navigate('/');
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || 'Login failed');
      }
    } catch (error) {
      toast.error('An error occurred');
    }
  };
  return (
    <div className="login">
      <img src="/images/login.png" alt="Login Background" className="login__bg" />

      <form className="login__form" onSubmit={handleSubmit}>
        <h1 className="login__title">Login</h1>

        <div className="login__inputs">
          <div className="login__box">
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              required
              className="login__input"
              onChange={handleInput}
              value={user.email}
            />
            <i className="ri-mail-fill"></i>
          </div>

          <div className="login__box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="login__input"
              onChange={handleInput}
              value={user.password}
            />
            <i className="ri-lock-2-fill"></i>
          </div>
        </div>

        <div className="login__check">
          <div className="login__check-box">
            <input type="checkbox" className="login__check-input" id="user-check" />
            <label htmlFor="user-check" className="login__check-label">Remember me</label>
          </div>

          <a href="#" className="login__forgot">Forgot Password?</a>
        </div>

        <button type="submit" className="login__button">Login</button>

        <div className="login__register">
          Don't have an account? <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
