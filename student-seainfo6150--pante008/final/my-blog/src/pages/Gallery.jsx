import React, { useState, useEffect } from 'react';
import './Gallery.css';

function Gallery() {
  const [images, setImages] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/users/ekta008/photos?client_id=DWwLKg81rWZFUUtx4ksNFJ-cbdlFdqeM34Fzkmo0yv8`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const filteredImages = images.filter(image => {
    if (filter === 'all') return true;
    return image.width > image.height ? filter === 'landscape' : filter === 'portrait';
  });

  return (
    <div className="gallery">
      <h1>My Gallery</h1>
      <div className="filter-controls">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('landscape')}>Landscape</button>
        <button onClick={() => setFilter('portrait')}>Portrait</button>
      </div>
      <div className="image-grid">
        {filteredImages.map((image) => (
          <img key={image.id} src={image.urls.small} alt={image.alt_description} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;