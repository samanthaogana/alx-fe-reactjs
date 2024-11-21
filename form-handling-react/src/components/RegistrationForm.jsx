import { useState } from "react";

const RegistrationForm = () => {
    const[username, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
}

const handleSubmit = (e) => {
    e.preventDefault();
    if(username === '' || email === '' || password === '') {
        alert('All forms are required');
        return;
    }
    console.log('Form submitted:', {username, email, password });
};

return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">Username:</label>
            <input 
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              />
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input
             type="email"
             id="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             required
             />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input
             type="password"
             id="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             required
             />
        </div>
        <button type="submit">Register</button>
    </form>
);

export default RegistrationForm;