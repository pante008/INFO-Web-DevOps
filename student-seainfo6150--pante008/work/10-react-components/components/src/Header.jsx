function Header({ setCurrentPage }) {
  return (
    <header>
      <h1>The Cat: An Interesting Animal App</h1>
      <nav>
        <button onClick={() => setCurrentPage('text')}>Text Page</button>
        <button onClick={() => setCurrentPage('card')}>Card Page</button>
        <button onClick={() => setCurrentPage('panel')}>Panel Page</button>
      </nav>
    </header>
  );
}

export default Header;
