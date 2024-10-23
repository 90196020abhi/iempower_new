import React from 'react';
import './Possibilities.css';

const Possibilities = () => {
  return (
    <div className="possibilities-wrapper">
      <div className="possibilities-container">
        <div className="possibilities-content">
          <h1>The possibilities</h1>
          <h1 className="highlight">are endless</h1>
          <p>
            Assign and Monitor the tasks and activities for your team
            seamlessly through our platform and work effortlessly.
          </p>
          <ul className="feature-list">
            <li><span className="icon">⚡</span>Customize your application according your desire</li>
            <li><span className="icon">⚡</span>Use in both dark and light theme seamlessly</li>
            <li><span className="icon">⚡</span>Build your application using the required APIs</li>
            <li><span className="icon">⚡</span>Connect with our developers for new features</li>
          </ul>
        </div>
        <div className="possibilities-image-container">
          <img src="/posiilities.png" alt="Dashboard" />
        </div>
      </div>
      
    </div>
  );
};

export default Possibilities;