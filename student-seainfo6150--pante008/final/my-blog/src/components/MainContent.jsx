import React from 'react';
import Gallery from '../pages/Gallery';
import Blog from '../pages/Blog';
import About from '../pages/About';
import Schedule from '../pages/Schedule';
import BuyMeCoffee from '../pages/BuyMeCoffee';
import Settings from '../pages/Settings';

function MainContent({ currentPage }) {
  const renderPage = () => {
    switch (currentPage) {
      case 'about': return <About />;
      case 'blog': return <Blog />;
      case 'gallery': return <Gallery />;
      case 'schedule': return <Schedule />;
      case 'buyMeCoffee': return <BuyMeCoffee />;
      case 'settings': return <Settings />;
      default: return <About />;
    }
  };

  return (
    <main id='main-content' tabIndex={-1}>
      {renderPage()}
    </main>
  );
}

export default MainContent;