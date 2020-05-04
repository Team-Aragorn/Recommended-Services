import React from 'react';

const ProductView = (props) => {
  return (
    <div>
      {props.game.images.map((image) => {
        return (
          <img key={image} src={image} alt="product images" />
        );
      })}
    </div>
  );
};

export default ProductView;
