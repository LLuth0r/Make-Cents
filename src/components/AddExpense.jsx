import axios from 'axios';
import { budgetURL, config } from '../services';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import BudgetTable from './BudgetTable';

const AddExpense = (props) => {
  const [item, setItem] = useState('');
  const [cost, setCost] = useState('');
  const [income, setIncome] = useState('');
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    let data = {
      item,
      expense_cost: cost,
      income,
    };

    await axios.post(budgetURL, { fields: data }, config);
    props.setToggleFetch((prev) => !prev);
    
};
    
  return (
    <div>
      <h1 className="app-title">Vacation Fund$</h1>
      <div className="Dollars"></div>
      <form onSubmit={handleSubmit}>
      <div className='income'> 
        <label htmlFor='income'>Income</label>
        <input
          type='number'
          name='income'
          value={income}
          onChange={(e) => {
            setIncome(e.target.value);
          }}
        />
          <button className='button'>Submit</button>
          <button className='button'>Update</button>
          </div>
      <div className='expenseform'>
        <label htmlFor='expense'>Expense Item:</label>
        <input
          type='text'
          name='expense'
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
        <label htmlFor='expenseCost'>Expense Cost:</label>
        <input
          type='number'
          name='expenseCost'
          value={cost}
          onChange={(e) => {
            setCost(e.target.value);
          }}
        />
        {/* <button className='button' type='submit'>Add</button>
          <button className='button'>Delete</button> */}
          </div>
      </form>
    </div>
  )
}
  
export default AddExpense;