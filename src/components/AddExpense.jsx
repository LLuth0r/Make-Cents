import axios from 'axios';
import { budgetURL, incomeURL, config } from '../services';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './AddExpense.css';

const AddExpense = (props) => {
  const [item, setItem] = useState('');
  const [cost, setCost] = useState('');
  const [income, setIncome] = useState('');
  const params = useParams();
  console.log(params);

  async function handleSubmit(e) {
    e.preventDefault();
    let data = {
      item,
      expense_cost: cost,
      income,
    };
  
    await axios.post(incomeURL, { fields: data }, config);
    props.setToggleFetch((prev) => !prev);

    await axios.post(budgetURL, { fields: data }, config);
    props.setToggleFetch((prev) => !prev);
};
    
  return (
    <div className='add-budget-items'>
      <h1 className="app-title">Vacation Fund$</h1>
      <form className='budget-form' onSubmit={handleSubmit}>
        <div className='incomeForm'> 
      <label htmlFor='income'>Income</label>
        <input
          type='number'
          name='income'
          value={income}
          onChange={(e) => {
            setIncome(e.target.value);
          }}
        />
          <button className='button' type='submit'>Add</button>
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
          type="number"
          name='expense_cost'
            value={cost}
            min="1"
            max="20000"
          onChange={(e) => {
            setCost(e.target.value);
          }}
        />
        <button className='button' type='submit'>Add</button>
          </div>
      </form>
      <div className='budget-headers'> 
      <h2 className='expense-type'>Monthly Expense Item</h2>
      <h2 className='expense-cost'>Expense Cost</h2>
        <h2 className='income-header'>Monthly Income</h2>
        </div>
    </div>
  )
}
  
export default AddExpense;