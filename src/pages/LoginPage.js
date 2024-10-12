// LoginPage.js
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect the user to the home page after login
      navigate('/home');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border border-gray-300 shadow-lg rounded-md bg-white">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        {error && <p className="text-red-500 mb-4 text-center font-medium">{error}</p>}
        <button type="submit" className="bg-blue-500 text-white w-full py-3 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-md mb-4">
          Login
        </button>
      </form>
      <p className="text-center text-gray-600">Don't have an account?</p>
      <Link to="/register">
        <button className="bg-green-500 text-white w-full py-3 mt-2 rounded-md hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
          Register
        </button>
      </Link>
    </div>
  );
}

export default LoginPage;