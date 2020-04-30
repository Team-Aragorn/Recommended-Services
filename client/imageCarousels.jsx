import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>Hello Eli!</div>
    );
  }
}

ReactDOM.render(<ImageCarousel />, document.getElementById('app'));
