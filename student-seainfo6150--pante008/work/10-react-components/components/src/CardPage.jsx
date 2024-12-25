function CardPage({ setCurrentPage }) {
  return (
    <div className="card-page">
      <h2>Picturesque Cats</h2>
      <div className="card-container">
        <div className="card">
          <h3>Cat's Looking At You</h3>
          <p>Let's visit some cat's looking at you!</p>
          <button onClick={() => setCurrentPage('panel')}>Go to Panel Page</button>
        </div>
        <div className="card">
          <h3>Cat's Posing</h3>
          <p>When it comes to capturing the perfect feline portrait, cats are natural supermodels with their own unique style. Whether it's a regal head-tilt that shows off their whiskers, or a relaxed lounging pose that highlights their graceful form, each cat brings their own personality to the camera! We will visit the pose when cats looking at you!</p>
        </div>
      </div>
    </div>
  );
}

export default CardPage;