import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="hero">
        <div className="icons-left">
          <a className="rhino-icon-anchor-tag nav-item-left" href="main-logo">
            <img className="rhino-icon-top" src="/images/rhino-500.png" alt="logo-icon"/>
          </a>
          <h2 className="nav-item-left">Rhino</h2>
        </div>
        <div className="icons-right">
          <a className="nav-item-right" href="#about">About</a>
          <a className="nav-item-right" href="#features">Features</a>
          <a className="nav-item-right" href="#sign-up">Sign Up</a>
        </div>
      </div>
      <div className="section center">
        <div className="hero-content">
          <h2 className="heading-3">Bring the world to your fingertips</h2>
          <h3 className="hero-subhead">Share & discover travel experiences with friends, family, and a community of explorers.</h3>
          <img className="white-btn-apple-store store-button" src="/images/apple-app-store-button-white.png" alt="apple store icon" width="175"/>
          <img className="white-btn-google-store store-button" src="/images/google-play-button-white.png" alt="google store icon" width="175"/>
        </div>
      </div>
    </div>
  );
}

export default App;
