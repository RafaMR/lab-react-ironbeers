import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const NewBeer = () => {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [first_brewed, setFirstBrewed] = useState('');
  const [brewers_tips, setBrewersTips] = useState('');
  const [attenuation_level, setAttenuationLevel] = useState(0);
  const [contributed_by, setContibutedBy] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name,
        tagline,
        description,
        first_brewed,
        brewers_tips,
        attenuation_level,
        contributed_by
      })
      .then((res) => {
        console.log(res);
        setName('');
        setTagline('');
        setDescription('');
        setFirstBrewed('');
        setBrewersTips('');
        setAttenuationLevel(0);
        setContibutedBy('');
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Navbar />
      <h1>Add a New Beer</h1>

      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Tagline:</label>
      <input
        type="text"
        value={tagline}
        onChange={(e) => setTagline(e.target.value)}
      />
      <label>Description:</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>First Brewed:</label>
      <input
        type="text"
        value={first_brewed}
        onChange={(e) => setFirstBrewed(e.target.value)}
      />
      <label>Brewers Tips:</label>
      <input
        type="text"
        value={brewers_tips}
        onChange={(e) => setBrewersTips(e.target.value)}
      />
      <label>Attenuation Level:</label>
      <input
        type="number"
        value={attenuation_level}
        onChange={(e) => setAttenuationLevel(e.target.value)}
      />
      <label>Contributed By:</label>
      <input
        type="text"
        value={contributed_by}
        onChange={(e) => setContibutedBy(e.target.value)}
      />
      <button type="submit">Add a New Beer to the Data Base</button>
    </form>
  );
};

export default NewBeer;
