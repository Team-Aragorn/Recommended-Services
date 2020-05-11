/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';

const Navigation = () => {
  const [selected, setSelected] = useState('1');

  return (
    <div className="allbuttons">
      <a href="#game1" onClick={() => setSelected('1')} style={selected === '1' ? { backgroundColor: '#da362c' } : null} className="button" key="1" />
      <a href="#game5" onClick={() => setSelected('2')} style={selected === '2' ? { backgroundColor: '#da362c' } : null} className="button" key="2" />
      <a href="#game6" onClick={() => setSelected('3')} style={selected === '3' ? { backgroundColor: '#da362c' } : null} className="button" key="3" />
      <a href="#game7" onClick={() => setSelected('4')} style={selected === '4' ? { backgroundColor: '#da362c' } : null} className="button" key="4" />
      <a href="#game8" onClick={() => setSelected('5')} style={selected === '5' ? { backgroundColor: '#da362c' } : null} className="button" key="5" />
      <a href="#game9" onClick={() => setSelected('6')} style={selected === '6' ? { backgroundColor: '#da362c' } : null} className="button" key="6" />
      <a href="#game10" onClick={() => setSelected('7')} style={selected === '7' ? { backgroundColor: '#da362c' } : null} className="button" key="7" />
      <a href="#game11" onClick={() => setSelected('8')} style={selected === '8' ? { backgroundColor: '#da362c' } : null} className="button" key="8" />
      <a href="#game12" onClick={() => setSelected('9')} style={selected === '9' ? { backgroundColor: '#da362c' } : null} className="button" key="9" />
    </div>
  );
};

export default Navigation;
