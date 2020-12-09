import axios from 'axios';
import { budgetURL, incomeURL, config } from '../services';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './AddExpense.css';
import ExpenseChart from './ExpenseChart';

const AddExpense = (props) => {
  const [item, setItem] = useState('');
  const [cost, setCost] = useState('');
  const [expense, setExpense] = useState(false);
  const params = useParams();
  console.log(params);

  async function handleExpenseSubmit(e) {
    e.preventDefault();
    let data = {
      item,
      expense_cost: cost,
      expense,
    };

    await axios.post(budgetURL, { fields: data }, config);
    props.setToggleFetch((prev) => !prev);
  };
  
  const handleCheckBox = (e) => {
    setExpense(!expense)
  }

  console.log(expense)
  
  return (
    <div className='add-budget-items'>
      <h1 className="app-title">Vacation Fund$</h1>
      <form className='budget-form'>
        <div className='expenseform'>
        <label htmlFor='expense'>Income / Expense Item:</label>
        <input
          type='text'
          name='expense'
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
        <label htmlFor='expenseCost'>$Value:</label>
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
          <label for="checkbox">Expense?</label>
          <input type="checkbox" id="checkbox" name="checkbox" value={expense} onChange={e=>(handleCheckBox(e))}/>
        <button className='button' onClick={handleExpenseSubmit}>Add</button>
          </div>
      </form>
      <ExpenseChart expenses={props.expenses} />
      <div className='budget-headers'> 
      <h2 className='expense-type'>Income/Expense Item</h2>
        <h2 className='expense-cost'>$ Value</h2>
      </div>
    </div>
  )
}
  
export default AddExpense;