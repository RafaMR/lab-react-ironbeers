import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BeerList = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((res) => setBeers(res.data));
  }, []);

  return (
    <div>
      <Navbar />
      {beers.map((beer) => {
        return (
          <div key={beer.id}>
            <Link to={`/beers/${beer.id}`}>
              <img
                src={beer.image_url}
                alt="beer"
                style={{ width: 100, height: 300 }}
              />
              <h2>{beer.name}</h2>
              <h4>{beer.tagline}</h4>
              <h3>{beer.contributed_by}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default BeerList;
