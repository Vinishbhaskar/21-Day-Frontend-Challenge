import React from 'react';

const ImageModal = ({ image, onClose }) => {
  return (
    <div className="image-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <img src={image.urls.regular} alt={image.alt_description} />
        <div className="image-details">
          <p><b>Photographer:</b> {image.user.name}</p>
          <p><b>Username: </b>{image.user.username}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
