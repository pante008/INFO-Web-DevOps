import React from 'react';
import logo from '/src/assets/logo.png';

function Header() {
  const navigateToHome = () => {
    document.location.hash = 'home'; 
  };

  return (
    <header className="header">
      <h1>Holistic Living</h1>
      <a
        href="#home" 
        aria-label="Go to Home Page"
        onClick={navigateToHome} 
      >
        <img
          src={logo}
          alt="Logo image of holistic living with food, tea, book, and calm"
          className="app-logo-image"
        />
      </a>
    </header>
  );
}

export default Header;
