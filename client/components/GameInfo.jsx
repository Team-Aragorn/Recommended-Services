/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const GameInfo = (props) => {
  const { games } = props;
  console.log(games);
  let count = 0;

  return (
    <div className="spacer">
      <div />
      <div className="allgames">
        {games.map((game) => {
          count += 1;
          return (
            // eslint-disable-next-line no-underscore-dangle
            <div value={game._id} key={game._id} className="onegame" id={`game${count}`}>
              <img className="image" src={game.mainImage} alt="game cover" />
              <h3 className="gametitle">{game.gameTitle}</h3>
              <h4 className="console">{game.console}</h4>
              <div className="line" />
              <div className="row">
                <h5 className="rowlable">New</h5>
                <h4 className="rowprice">${game.newPrice}</h4>
              </div>
              <div className="line" />
              <div className="row">
                <h5 className="rowlable">Pre-Owned</h5>
                <h4 className="rowprice">${game.preOwnedPrice}</h4>
              </div>
              <div className="line" />
              <div className="row">
                <h5 className="rowlable">Digital</h5>
                <h4 className="rowprice">${game.digitalPrice}</h4>
              </div>
              <div className="line" />
            </div>
          );
        })}
      </div>
      <div />
    </div>
  );
};

export default GameInfo;
