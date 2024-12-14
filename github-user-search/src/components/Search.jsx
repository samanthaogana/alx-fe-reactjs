import React, { useState } from 'react';
import fetchUserData from './services/githubService';

const Search = () => {
    // State to keep track of input value
    const [username, setUsername] = useState('');
    // State to keep track of API call status
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [userData, setUserData] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the page from reloading
        setLoading(true);
        setError(false);
        setUserData(null);

        try {
            const data = await fetchUserData(username);
            setUserData(data);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Enter GitHub username" 
                    value={username} 
                    onChange={(event) => setUsername(event.target.value)} 
                />
                <button type="submit">Search</button>
            </form>
            
            {/* Conditional Rendering */}
            {loading && <p>Loading...</p>}
            {error && <p>Looks like we can't find the user.</p>}
            {userData && (
                <div>
                    <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
                    <p>Name: {userData.name}</p>
                    <p>Username: {userData.login}</p>
                    <p><a href={userData.html_url} target="_blank" rel="noopener noreferrer">View GitHub Profile</a></p>
                </div>
            )}
        </div>
    );
};

export default Search;

