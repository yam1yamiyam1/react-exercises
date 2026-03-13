import { useEffect, useState } from 'react';

const PageTracker = () => {
  const [page, setPage] = useState('home');
  useEffect(() => {
    console.log('App mounted');
  }, []);
  useEffect(() => {
    document.title = `Page: ${page}`;
  }, [page]);
  useEffect(() => {
    console.log(`Navigated to: ${page}`);
  }, [page]);
  return (
    <div className="page-tracker">
      <p>Current page: {page}</p>
      <button onClick={() => setPage('home')}>Go Home</button>
      <button onClick={() => setPage('about')}>Go About</button>
      <button onClick={() => setPage('contact')}>Go Contact</button>
    </div>
  );
};

export default PageTracker;
