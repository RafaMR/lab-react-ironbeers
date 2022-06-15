import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import BeerList from './components/BeerList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beers" element={<BeerList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
