import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../store/auth';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: ''
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user.name || !user.email || !user.password || !user.phone || !user.address) {
      toast.error('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response from server:', errorData);
        toast.error(errorData.message || 'An error occurred.');
        return;
      }

      const resData = await response.json();
      console.log('Response from server:', resData); // Log the entire response

      if (resData.token) {
        console.log('Token:', resData.token); // Log the token
        storeTokenInLS(resData.token); // Store the token in local storage
      } else {
        console.error('Token not found in response');
      }

      setUser({ name: '', email: '', password: '', phone: '', address: '' });
      toast.success('Registration Successful');
      navigate('/login');
    } catch (error) {
      console.error('Registration Error:', error);
      toast.error('An error occurred during registration.');
    }
  };

  return (
    <div className='container register1'>
      <div className='right-side'>
        <img src='/images/reg1.jpg' alt='Registration' />
      </div>
      <form onSubmit={handleSubmit}>
        <div className='left-side'>
          <label>
            Name:
            <input
              type='text'
              name='name'
              placeholder='Enter your Name'
              value={user.name}
              onChange={handleInput}
            />
          </label>
          <br /><br />
          <label>
            E-mail:
            <input
              type='email'
              name='email'
              placeholder='Enter your E-mail'
              value={user.email}
              onChange={handleInput}
            />
          </label>
          <br /><br />
          <label>
            Password:
            <input
              type='password'
              name='password'
              placeholder='Enter your Password'
              value={user.password}
              onChange={handleInput}
            />
          </label>
          <br /><br />
          <label>
            Phone:
            <input
              type='text'
              name='phone'
              placeholder='+92'
              value={user.phone}
              onChange={handleInput}
            />
          </label>
          <br /><br />
          <label>
            Address:
            <input
              type='text'
              name='address'
              placeholder='Enter your Address'
              value={user.address}
              onChange={handleInput}
            />
          </label>
          <br /><br />
          <button type='submit' className='btn btn-primary m-4 ms-5'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
