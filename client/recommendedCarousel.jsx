/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import GameInfo from './components/GameInfo.jsx';
import Navigation from './components/Navigation.jsx';
import styles from './styles.css';

class RecommendedCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      games: [],
    };
  }

  componentDidMount() {
    axios.get('/recommended')
      .then((data) => { this.updateGame(data.data); });
  }

  updateGame(data) {
    this.setState({
      games: data,
    });
  }

  render() {
    const { games } = this.state;
    return (
      <div className={styles.recommendedSection}>
        <h1 className={styles.title}>RECOMMENDED FOR YOU</h1>
        <GameInfo games={games} />
        <Navigation />
      </div>
    );
  }
}

ReactDOM.render(<RecommendedCarousel />, document.getElementById('recommended'));
