import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { budgetURL, config } from './services'
import AddExpense from './components/AddExpense';
import BudgetTable from './components/BudgetTable';


function App() {

  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);


  useEffect(() => {
    async function getBudget() {
      let resp = await axios.get(budgetURL, config);
      setExpenses(resp.data.records);
      console.log(resp);
    }
    getBudget();
  }, [toggleFetch]);


  return (
    <div className="App">
   
      <Route exact path='/'>
        <>
          <AddExpense expenses={expenses} setToggleFetch={setToggleFetch} />
          {expenses.map((expense) => <BudgetTable expense={expense} setToggleFetch={setToggleFetch}/>)}
        </>                       
      </Route>
     
    </div>
  );
}

export default App;
