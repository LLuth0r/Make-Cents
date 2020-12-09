import React from 'react'
import { budgetURL, config } from '../services';
import axios from 'axios';


export default function BudgetTable(props) {

  const handleDelete = async () => {
    const fullURL = `${budgetURL}/${props.expense.id}`;
    await axios.delete(fullURL, config);
    props.setToggleFetch((prev) => !prev);
  }

  return (
    <div className="budget-table">
      <p className="expense">{props.expense.fields.item}</p>
      <p className="expense-cost">{props.expense.fields.expense_cost}</p>
      <p className="income">{props.expense.fields.income}</p>
      <button className='update-button'>Update</button>
      <button className='delete-button' onClick={handleDelete}>Delete</button>
    </div>
  )
}
