import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const SingleBeer = () => {
  const [singleBeer, setSingleBeer] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((res) => setSingleBeer(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <Navbar />
      <h1>{singleBeer.name}</h1>
      <img
        src={singleBeer.image_url}
        alt="beer"
        style={{ width: 100, height: 300 }}
      />
      <h2>{singleBeer.tagline}</h2>
      <h3>{singleBeer.contributed_by}</h3>
      <h4>{singleBeer.description}</h4>
    </div>
  );
};

export default SingleBeer;
