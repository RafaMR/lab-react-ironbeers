import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((res) => setRandomBeer(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>{randomBeer.name}</h1>
      <img
        src={randomBeer.image_url}
        alt="beer"
        style={{ width: 100, height: 300 }}
      />
      <h2>{randomBeer.tagline}</h2>
      <h3>{randomBeer.contributed_by}</h3>
      <h4>{randomBeer.description}</h4>
    </div>
  );
};

export default RandomBeer;
