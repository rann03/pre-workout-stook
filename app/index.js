import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <p>This is the main page of our website.</p>
      <Link href="/about">
        <a>About Us</a>
      </Link>
    </div>
  );
};

export default Home;
