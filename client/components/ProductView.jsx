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

  return (
    <div>
      <div className="mainImage">
        <img src={mainImage || game.images[0]} alt="main" />
      </div>
      {game.images.map((image) => (
        <input type="image" className="imageBar" key={image} src={image} alt="product images" onClick={(event) => { setMainImage(event.target.src); }} />
      ))}
    </div>
  );
};

export default ProductView;
