import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { baseURL, config } from './services'
import Home from './components/Home';
import DollarSaved from './components/DollarSaved'

function App() {

  const [dollarSaved, setDollarSaved] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);


  useEffect(() => {
    async function getDollars() {
      let response = await axios.get(baseURL, config);
      setDollarSaved(response.data.records);
      console.log(response);
    }
    getDollars();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Route exact path='/'>
      <Home />
      </Route>
      <Route path='/DollarSaved'>
        <DollarSaved /> 
      </Route>
    </div>
  );
}

export default App;
