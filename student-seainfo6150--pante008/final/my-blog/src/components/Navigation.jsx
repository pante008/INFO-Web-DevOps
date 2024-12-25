import React, { useState, useEffect, useRef } from "react";
import './Navigation.css';

function Navigation({ setCurrentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); 

  const navigate = (page) => {
    document.location.hash = page; 
    setCurrentPage(page); 
  };

  const currentHash = document.location.hash.replace('#', '');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (dropdownRef.current && !dropdownRef.current.contains(event.target))
      ) {
        setIsDropdownOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <nav className="navigation">
      <div className="desktop-menu">
        <ul className="nav-links">
          <li>
            <button
              className={currentHash === 'about' ? 'active' : ''}
              onClick={() => navigate('about')}
            >
              About Us
            </button>
          </li>
          <li>
            <button
              className={currentHash === 'blog' ? 'active' : ''}
              onClick={() => navigate('blog')}
            >
              Visit our Blog
            </button>
          </li>
          <li>
            <button
              className={currentHash === 'gallery' ? 'active' : ''}
              onClick={() => navigate('gallery')}
            >
              Gallery
            </button>
          </li>

          <li
            className="dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)} 
            onMouseLeave={() => setIsDropdownOpen(false)} 
          >
            <button className="dropdown-btn">Connect With Me</button>
            {isDropdownOpen && (
              <ul className="dropdown-links">
                <li>
                  <button
                    className={currentHash === 'schedule' ? 'active' : ''}
                    onClick={() => navigate('schedule')}
                  >
                    Schedule a Call
                  </button>
                </li>
                <li>
                  <button
                    className={currentHash === 'buyMeCoffee' ? 'active' : ''}
                    onClick={() => navigate('buyMeCoffee')}
                  >
                    Buy Me a Coffee
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              className={currentHash === 'settings' ? 'active' : ''}
              onClick={() => navigate('settings')}
            >
              Settings
            </button>
          </li>
        </ul>
      </div>

      <div className="hamburger-menu">
        <button className="hamburger-icon" onClick={toggleMenu}>
          &#9776; 
        </button>

        {isMenuOpen && (
          <ul className="hamburger-links">
            <li>
              <button
                className={currentHash === 'about' ? 'active' : ''}
                onClick={() => navigate('about')}
              >
                About Us
              </button>
            </li>
            <li>
              <button
                className={currentHash === 'blog' ? 'active' : ''}
                onClick={() => navigate('blog')}
              >
                Visit Our Blog
              </button>
            </li>
            <li>
              <button
                className={currentHash === 'gallery' ? 'active' : ''}
                onClick={() => navigate('gallery')}
              >
                Gallery
              </button>
            </li>

            <li className="dropdown" onClick={toggleDropdown}>
              <button className="dropdown-btn">Connect With Me</button>
              {isDropdownOpen && (
                <ul className="dropdown-links">
                  <li>
                    <button
                      className={currentHash === 'schedule' ? 'active' : ''}
                      onClick={() => navigate('schedule')}
                    >
                      Schedule a Call
                    </button>
                  </li>
                  <li>
                    <button
                      className={currentHash === 'buyMeCoffee' ? 'active' : ''}
                      onClick={() => navigate('buyMeCoffee')}
                    >
                      Buy Me a Coffee
                    </button>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                className={currentHash === 'settings' ? 'active' : ''}
                onClick={() => navigate('settings')}
              >
                Settings
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
