import React, { useState } from 'react';

const Navigation = (props) => {
  const { games } = props;
  games.splice(-3);

  return (
    <div className="allbuttons">
      {games.map((game) => (
        // eslint-disable-next-line no-underscore-dangle
        <button className="button" key={game._id} type="button" value={game._id} />
      ))}
    </div>
  );
};

export default Navigation;
