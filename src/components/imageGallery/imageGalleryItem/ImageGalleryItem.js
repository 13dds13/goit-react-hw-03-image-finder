import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ images, onImgClick }) => {
  return images.map((img) => (
    <li key={img.webformatURL} className="ImageGalleryItem">
      <img
        src={img.webformatURL}
        alt={img.tag}
        className="ImageGalleryItem-image"
        onClick={() => onImgClick(img.id)}
      />
    </li>
  ));
};

ImageGalleryItem.propTypes = {
  onImgClick: PropTypes.func,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string,
      tag: PropTypes.string,
      id: PropTypes.number,
    })
  ),
};

export default ImageGalleryItem;
