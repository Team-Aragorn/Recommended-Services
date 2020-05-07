import React, { useState } from 'react';

const Navigation = (props) => {
  const { games } = props;
  games.splice(-3);

  return (
    games.map((game) => {
      return (
        // eslint-disable-next-line no-underscore-dangle
        <button key={game._id} type="button" value={game._id} />
      );
    })
  );
};

export default Navigation;
