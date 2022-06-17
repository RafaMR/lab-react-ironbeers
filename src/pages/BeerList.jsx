import React, { useState, useEffect } from 'react';
import Navbar from './../components/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BeerList = () => {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((res) => setBeers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
      .then((res) => setBeers(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <div className="beerList">
        <form onSubmit={handleSubmit}>
          <label>Search:</label>
          <input type="text" value={search} onChange={handleSearch} />
          <button type="submit">Search</button>
        </form>
        {beers.map((beer) => {
          return (
            <div key={beer._id}>
              <Link to={`/${beer._id}`}>
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
    </>
  );
};

export default BeerList;
