import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { baseURL, config } from './services'
import Home from './components/Home';
import DollarSaved from './components/DollarSaved';
import AddExpense from './components/AddExpense';

function App() {

  const [dollars, setDollars] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);


  useEffect(() => {
    async function getDollars() {
      let response = await axios.get(baseURL, config);
      setDollars(response.data.records);
      console.log(response);
    }
    getDollars();
  }, [toggleFetch]);
  // console.log(dollars);
  console.log(dollars);
  return (
    <div className="App">
        <Route path='/DollarSaved/:id'>
        {dollars.map((dollar) => {
          return <DollarSaved dollars={dollars} setToggleFetch={setToggleFetch} />
        })}        
      </Route>

      <Route exact path='/'>
        <Home dollars={dollars}/>
      </Route>

      <Route path='/AddExpense/'>
        {expenses.map((expense) => {
          return <AddExpense expenses={expenses} setToggleFetch={setToggleFetch}/>
        })}        
      </Route>
    </div>
  );
}

export default App;
