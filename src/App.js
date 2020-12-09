import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { baseURL, budgetURL, incomeURL, config } from './services'
import Home from './components/Home';
import DollarSaved from './components/DollarSaved';
import AddExpense from './components/AddExpense';
import BudgetTable from './components/BudgetTable';


function App() {

  const [dollars, setDollars] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);


  useEffect(() => {
    async function getDollars() {
      let response = await axios.get(baseURL, config);
      setDollars(response.data.records);
      console.log(response);
    }
    getDollars();
  }, [toggleFetch]);

  useEffect(() => {
    async function getBudget() {
      let resp = await axios.get(budgetURL, config);
      setExpenses(resp.data.records);
      console.log(resp);
    }
    getBudget();
  }, [toggleFetch]);

  useEffect(() => {
    async function getIncome() {
      let incomeResp = await axios.get(incomeURL, config);
      setIncome(incomeResp.data.records);
      console.log(incomeResp);
    }
    getIncome();
  }, [toggleFetch]);

  return (
    <div className="App">

      <Route exact path='/'>
        <Home dollars={dollars}/>
      </Route>      

      <Route path='/DollarSaved/:id'>
        {dollars.map((dollar) => {
          return <DollarSaved dollars={dollars} setToggleFetch={setToggleFetch} />
        })}        
      </Route>

      <Route path='/Budget/'>
        <>
          <AddExpense expenses={expenses} setToggleFetch={setToggleFetch} />
          {expenses.map((expense) => <BudgetTable expense={expense} />)}
        </>                       
      </Route>

    </div>
  );
}

export default App;
