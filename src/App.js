import Create from './views/Create';
import Main from './views/Main';
import Ditail from './views/Ditail';
import { Link} from '@reach/router';
import { Router } from '@reach/router';
import React, { useState} from 'react';
import Edit from './views/Edit';
import './App.css';

function App(props) {
  const [allpets, setAllPets]=useState([])

  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <Router>
        <Main path="/"/>
        <Create path="/pets/new"/>
        <Edit path="/pet/:id/edit"/>
        <Ditail path="/pets/:id"/>
      </Router>
    </div>
  );
}

export default App;
