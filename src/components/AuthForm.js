import React from 'react';

function AuthForm({ type, onSubmit }) {
  return (
    <div className="w-full max-w-sm mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">{type === 'login' ? 'Login' : 'Register'}</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        {type === 'register' && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md"
        >
          {type === 'login' ? 'Login' : 'Register'}
        </button>
      </form>
    </div>
  );
}

export default AuthForm;
