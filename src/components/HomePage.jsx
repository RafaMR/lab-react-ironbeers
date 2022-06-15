import React from 'react';
import { Link } from 'react-router-dom';
import beers from './../assets/beers.png';
import newBeer from './../assets/new-beer.png';
import randomBeer from './../assets/random-beer.png';

const HomePage = () => {
  return (
    <div>
      <Link to="/beers">
        <img src={beers} alt="beer" style={{ width: 500 }} />
        <h2>All Beers </h2>
      </Link>
      <Link to="/random-beer" style={{ marginRight: 50 }}>
        <img src={newBeer} alt="beer" style={{ width: 500 }} />
        <h2>Random Beer</h2>
      </Link>
      <Link to="/new-beer" style={{ marginRight: 50 }}>
        <img src={randomBeer} alt="beer" style={{ width: 500 }} />
        <h2> New Beer </h2>
      </Link>
    </div>
  );
};

export default HomePage;
