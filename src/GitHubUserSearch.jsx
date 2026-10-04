import { useState, useEffect } from 'react';

const GitHubUserSearch = () => {
  const [searchInput, setSearchInput] = useState('');
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

 
  useEffect(() => {
    if (error) {
      console.error('Error fetching GitHub user:', error);
    }
  }, [error]);

  const handleSearch = async () => {
    if (!searchInput) return;

    setIsLoading(true);
    setError('');
    setUserData(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await fetch(
        `https://api.github.com/users/${searchInput.toLowerCase()}`
      );

      if (!response.ok) {
        throw new Error('This GitHub user is not found');
      }

      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>GitHub User Search</h2>
      <input
        type="text"
        placeholder="Enter GitHub Username"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {userData && (
        <div>
          <h3>{userData.name || userData.login}</h3>
          <img
            src={userData.avatar_url}
            alt={userData.login}
            width="150px"
            style={{ borderRadius: '50%' }}
          />
          <p>Location: {userData.location || "N/A"}</p>
          <p>Public Repos: {userData.public_repos}</p>
        </div>
      )}
    </div>
  );
};

export default GitHubUserSearch;
