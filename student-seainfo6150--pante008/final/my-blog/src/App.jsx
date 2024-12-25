import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Navigation from './components/Navigation'; 
import { ThemeProvider, useTheme } from './components/ThemeContext';
import './App.css';

function AppContent() {
  const [currentPage, setCurrentPage] = useState(() => {
    return document.location.hash.replace('#', '') || 'about';
  });

  const { isDarkTheme } = useTheme();

  useEffect(() => {
    const handleHashChange = () => {
      const page = document.location.hash.replace('#', '') || 'about';
      setCurrentPage(page);
    };

    window.addEventListener('hashchange', handleHashChange);

    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className={`App ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header setCurrentPage={setCurrentPage} />
      <Navigation setCurrentPage={setCurrentPage} />
      <MainContent currentPage={currentPage} />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
