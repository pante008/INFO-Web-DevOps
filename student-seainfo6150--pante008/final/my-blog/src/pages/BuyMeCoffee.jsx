import React from 'react';
import './BuyMeCoffee.css';

function BuyMeCoffee() {
  return (
    <div className="buy-me-coffee">
      <h1>Buy Me a Coffee</h1>
      <a
        href="https://www.buymeacoffee.com/ektapant"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my Buy Me a Coffee page"
      >
        <button aria-label="Click to support my work by buying me a coffee">Support My Work</button>
      </a>
    </div>
  );
}

export default BuyMeCoffee;
