import './App.css';
import defaultDogs from './defaultDogs';
import DogList from './DogList';
import DogDetails from './DogDetails';
import Nav from './Nav';

import { Routes, Route, Navigate } from 'react-router-dom';

function App({ dogs = defaultDogs }) {
  return (
    <div className="App">
      <h1>Dog Finder</h1>
      <Nav dogNames={dogs.map(dog => dog.name)} />
      <Routes>
        <Route path="/dogs" element={<DogList dogs={dogs} />} />
        <Route path="/dogs/:name" element= {<DogDetails dogs={dogs} />} />
        <Route path="*" element={<Navigate replace to="/dogs" />} />
      </Routes>
    </div>
  );
}

export default App;
