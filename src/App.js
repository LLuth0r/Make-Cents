import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { baseURL, config } from './services'
import Home from './components/Home';
import DollarSaved from './components/DollarSaved'

function App() {

  const [dollars, setDollars] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);


  useEffect(() => {
    async function getDollars() {
      let response = await axios.get(baseURL, config);
      setDollars(response.data.records);
      // console.log(response);
    }
    getDollars();
  }, [toggleFetch]);

  return (
    <div className="App">
        <Route path='/DollarSaved/:id'>
        {dollars.map((dollar) => (
        <DollarSaved dollars={dollars} setToggleFetch={setToggleFetch}/> 
        ))}        
      </Route>
      <Route exact path='/'>
      <Home />
      </Route>
    </div>
  );
}

export default App;
