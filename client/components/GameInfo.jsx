import React, { useState } from 'react';

const GameInfo = (props) => {
  const { games } = props;

  return (
    <div className="allgames">
      {games.map((game) => (
        // eslint-disable-next-line no-underscore-dangle
        <div key={game._id} className="game">
          <img src={game.mainImage} alt="game cover" />
          <h3>{game.gameTitle}</h3>
          <h4>{game.console}</h4>
          <span className="row">
            <h5 className="rowlable">New</h5>
            <h4 className="rowprice">{game.newPrice}</h4>
          </span>
          <span className="row">
            <h5 className="rowlable">Pre-Owned</h5>
            <h4 className="rowprice">{game.preOwnedPrice}</h4>
          </span>
          <span className="row">
            <h5 className="rowlable">Digital</h5>
            <h4 className="rowprice">{game.digitalPrice}</h4>
          </span>
        </div>
      ))}
    </div>
  );
};

export default GameInfo;
