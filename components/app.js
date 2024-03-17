import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Component for user registration form
function RegistrationForm({ onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ username, password });
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

// Component for user login form
function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username, password });
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

// Main App component
function App() {
  const handleRegister = (userData) => {
    console.log('Register:', userData);
    // Add your registration logic here
  };

  const handleLogin = (userData) => {
    console.log('Login:', userData);
    // Add your login logic here
  };

  return (
    <div>
      <RegistrationForm onRegister={handleRegister} />
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

// Render the App component into the root element
ReactDOM.render(<App />, document.getElementById('root'));
