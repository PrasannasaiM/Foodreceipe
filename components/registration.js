import React, { useState } from 'react';

function Registration({ onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add validation for username, password, and confirmPassword
    if (!username || !password || password !== confirmPassword) {
      alert('Please fill all fields correctly.');
      return;
    }

    // Call onRegister function with user data
    onRegister({ username, password });

    // Reset form fields
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;
