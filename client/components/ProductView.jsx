/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductView = (props) => {
  ProductView.propTypes = {
    game: PropTypes.shape({
      images: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
  };

  const { game } = props;

  const [mainImage, setMainImage] = useState();
  const [imageZoom, setImageZoom] = useState();

  const imageMouseOver = (event) => {
    setImageZoom({
      transform: 'scale(1.4)',
      transformOrigin: `${event.pageX}px ${event.pageY}px`,
    });
  };

  return (
    <div className="productCarousel">
      <div className="imageBar">
        {game.images.map((image) => (
          <input type="image" className="image" key={image} src={image} alt="product images" style={mainImage === image ? { borderBottom: '3px solid #DA3625' } : null} onClick={(event) => { setMainImage(event.target.src); }} />
        ))}
      </div>
      <div className="mainImage">
        <img src={mainImage || game.images[0]} style={imageZoom} onMouseMove={(event) => { imageMouseOver(event); }} onMouseOut={() => setImageZoom(null)} alt="main" />
      </div>
    </div>
  );
};

export default ProductView;
