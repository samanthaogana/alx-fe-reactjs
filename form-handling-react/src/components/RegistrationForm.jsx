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
}