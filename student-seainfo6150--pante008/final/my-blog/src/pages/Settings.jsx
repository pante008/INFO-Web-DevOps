import React, { useEffect } from 'react';
import { useTheme } from '../components/ThemeContext';
import '../pages/Settings.css';

function Settings() {
  const { isDarkTheme, toggleTheme } = useTheme();
  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <div className="settings">
      <h2>Settings</h2>
      <div className="theme-toggle">
        <label htmlFor="theme-switch" className="theme-toggle-label">
          <span className="theme-status">{isDarkTheme ? 'Dark Mode' : 'Light Mode'}</span>
          <input
            id="theme-switch"
            type="checkbox"
            checked={isDarkTheme}
            onChange={toggleTheme}
            aria-checked={isDarkTheme ? "true" : "false"}
            aria-label={isDarkTheme ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="theme-toggle-input"
          />
          <span className="theme-toggle-slider"></span>
        </label>
        <span className="theme-status-text">
          {isDarkTheme ? "Dark Mode Activated" : "Light Mode Activated"}
        </span>
      </div>
    </div>
  );
}

export default Settings;
