import React from 'react';

const ImageModal = ({ image, onClose }) => {
  return (
    <div className="image-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <img src={image.urls.regular} alt={image.alt_description} />
        <div className="image-details">
          <p>Photographer: {image.user.name}</p>
          <p>Username: {image.user.username}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
