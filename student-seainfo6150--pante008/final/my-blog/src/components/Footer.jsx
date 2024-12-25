import React, { useEffect, useState } from 'react';
import './Footer.css';

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <footer className={isVisible ? 'show' : ''}>
      <a
        href="https://www.instagram.com/Fully_SoulFool"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          id="instagram-logo"
          src="/src/assets/instagram_logo.jpg"
          alt="Instagram logo to link it to the Instagram account for the app"
        />
        <p>&copy; 2024 Holistic Living App. All rights reserved.</p>
      </a>
    </footer>
  );
}

export default Footer;
