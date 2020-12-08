import React from 'react'
import axios from 'axios';
import { budgetURL, config } from '../services';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function BudgetForm(props) {

  const [item, setItem] = useState('');
  const [expenseCost, setExpenseCost] = useState('');
  const [income, setIncome] = useState('');
  
  const history = useHistory();
  const params = useParams();
  console.log(params)

  useEffect(() => {
    if (params.id && props.expenses.length > 0) {
      const expense = props.expenses.find((expense) => expense.id === params.id);
      setItem(expense.fields.item);
      setExpenseCost(expense.fields.expense_cost);
      setIncome(expense.fields.income);
    }
  }, [props.expenses, params.id]);

const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      item,
      expenseCost,
      income
    };

    if (params.id) {
      const expenseURL = `${budgetURL}/${params.id}`
      await axios.put(expenseURL, { fields }, config);
      
    } else {
      await axios.post(budgetURL, { fields }, config);
    }
    props.setToggleFetch((prev) => !prev);
    history.pushState('/')
};
  
  const handleDelete = async () => {
    const expenseURL = `${budgetURL}/${item.id}`;
    await axios.delete(expenseURL, config);
    props.setToggleFetch((prev) => !prev);
    history.push('/')
  };


  

  return (
    <div className="navbar">
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
          value={expenseCost}
          onChange={(e) => {
            setExpenseCost(e.target.value);
          }}
        />
        {/* <button className='button' type='submit'>Add</button> */}
          {/* <button className='button' onClick={handleDelete}>Delete</button> */}
          </div>
      </form>
    </div>
  )
}
