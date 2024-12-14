import axios from 'axios';

const fetchUserData = async ({ username, location, minRepos }) => {
    try {
        const query = [];
        if (username) query.push(`user:${username}`);
        if (location) query.push(`location:${location}`);
        if (minRepos) query.push(`repos:>${minRepos}`);

        const queryString = query.join('+');
        const response = await axios.get(`https://api.github.com/search/users?q=${queryString}`);
        return response.data.items;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};

export default fetchUserData;
