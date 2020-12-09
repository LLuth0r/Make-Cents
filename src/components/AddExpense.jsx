import axios from 'axios';
import { budgetURL, config } from '../services';
import React, { useState } from 'react';

const AddExpense = (props) => {
  const [item, setItem] = useState('');
  const [cost, setCost] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    let data = {
      item,
      expense_cost: cost,
    };

    await axios.post(budgetURL, { fields: data }, config);
    props.setToggleFetch((prev) => !prev);
};
    
  return (
    <div>
      <h1 className="app-title">Vacation Fund$</h1>
      <div className="Dollars"></div>
      <form onSubmit={handleSubmit}>
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
        <button className='button' type='submit'>Add</button>
          <button className='button'>Delete</button>
          </div>
      </form>
      <h2 className='expense-type'>Monthly Expense Item</h2>
      <h2 className='expense-cost'>Expense Cost</h2>
      <h2 className='income-header'>Monthly Income</h2>
    </div>
  )
}
  
export default AddExpense;