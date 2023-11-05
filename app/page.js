import React from 'react';
import Head from 'next/head';

const About = () => {
  return (
    <div style={{ backgroundColor: '#FFC076', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ textAlign: 'center' }}>
        <img src="/favicon.ico" alt="Your Logo" width="100" height="100" />
        <h1 style={{ color: 'black' }}>Username</h1>
        <input
          type="text"
          placeholder="Enter your username"
          style={{ color: 'black', backgroundColor: 'white' }}
        />
        <h1 style={{ color: 'black' }}>Password</h1>
        <input
          type="password"
          placeholder="Enter your password"
          style={{ color: 'black', backgroundColor: 'white' }}
        />
        <br />
        <button
          style={{
            backgroundColor: 'white',  // Background color of the button changed to white
            color: '#FFC076',  // Text color of the button changed to FFC076
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default About;
