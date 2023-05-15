import React from 'react';

const ImageCard = ({ image, onClick, onFavorite }) => {
  return (
    <div className="image-card">
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onClick(image)}
      />
      {/* <div className="image-card-details">
        <p>Photographer: {image.user.name}</p>
      </div> */}
    </div>
  );
};

export default ImageCard;
