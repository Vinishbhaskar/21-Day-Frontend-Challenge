import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageModal from './ImageModal';
import ImageCard from './ImageCard';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('Random');
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      let fetchedImages = [];
      let page = 1;

      while (fetchedImages.length < 20) {
        try {
          const response = await axios.get(
            `https://api.unsplash.com/photos/random?count=10&query=${searchQuery}&page=${page}`,
            {
              headers: {
                Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
              },
            }
          );          

          const newImages = response.data.map((image) => ({
            id: image.id,
            alt_description: image.alt_description,
            urls: {
              regular: image.urls.regular,
              small: image.urls.small,
            },
            user: {
              name: image.user.name,
              username: image.user.username,
            },
          }));

          fetchedImages = [...fetchedImages, ...newImages];
          page++;
        } catch (error) {
          console.error('Error fetching images:', error);
          setLoading(false);
          break;
        }
      }

      setImages((prevImages) => [...prevImages, ...fetchedImages.slice(0, 20)]);
      setLoading(false);
    };

    if (searchButtonClicked && searchQuery) {
      setImages([]);
      fetchImages();
    }
  }, [searchButtonClicked, searchQuery]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleImageModalClose = () => {
    setSelectedImage(null);
  };

  const handleSearch = () => {
    setSearchButtonClicked(true);
  };

  return (
    <div>
    <div className='container'>
      <h1>React Image Gallery</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search images..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="image-grid">
        {images.map((image) => (
          <ImageCard
            key={image.id}
            image={image}
            onClick={handleImageClick}
          />
        ))}
      </div>
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={handleImageModalClose} />
      )}
      {loading && <p>Loading...</p>}
    </div>
    </div>
  );
};

export default ImageGallery;
