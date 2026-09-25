import React from 'react';

const NotFound = () => {
  return (
    <div className="error-wrapper">
      <div className="error-container">
        <h1 id="error-code">404</h1>
        <div className="divider"></div>
        <h2 id="error-title">LOST IN THE VOID</h2>
        <p id="error-message">
          The page you are looking for doesn't exist, has been removed, or is temporarily unavailable.
        </p>
        <a href="/" id="back-home-btn">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;