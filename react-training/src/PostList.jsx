import { useEffect, useState } from 'react';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(
          'https://jsonplaceholder.typicode.com/posts?_limit=5'
        );
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="post-list">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {posts.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;
