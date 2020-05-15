/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styles from '../styles.css';

const GameInfo = (props) => {
  const { games } = props;
  console.log(games);
  let count = 0;

  return (
    <div className={styles.spacer}>
      <div />
      <div className={styles.allgames}>
        {games.map((game) => {
          count += 1;
          return (
            // eslint-disable-next-line no-underscore-dangle
            <div value={game._id} key={game._id} className={styles.onegame} id={`game${count}`}>
              <img className={styles.image} src={game.mainImage} alt="game cover" />
              <h3 className={styles.gametitle}>{game.gameTitle}</h3>
              <h4 className={styles.console}>{game.console}</h4>
              <div className={styles.line} />
              <div className={styles.row}>
                <h5 className={styles.rowlable}>New</h5>
                <h4 className={styles.rowprice}>${game.newPrice}</h4>
              </div>
              <div className={styles.line} />
              <div className={styles.row}>
                <h5 className={styles.rowlable}>Pre-Owned</h5>
                <h4 className={styles.rowprice}>${game.preOwnedPrice}</h4>
              </div>
              <div className={styles.line} />
              <div className={styles.row}>
                <h5 className={styles.rowlable}>Digital</h5>
                <h4 className={styles.rowprice}>${game.digitalPrice}</h4>
              </div>
              <div className={styles.line} />
            </div>
          );
        })}
      </div>
      <div />
    </div>
  );
};

export default GameInfo;
