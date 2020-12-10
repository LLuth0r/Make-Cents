import React from 'react'
import { budgetURL, config } from '../services';
import axios from 'axios';
import Button from '@material-ui/core/Button';


export default function BudgetTable(props) {

  const handleDelete = async() => {
    const itemURL = `${budgetURL}/${props.expense.id}`;
    await axios.delete(itemURL, config);
    props.setToggleFetch((prev) => !prev);
  }

  return (
    <div className="budget-table">
      <p className="expense">{props.expense.fields.item}</p>
      <p className="expense-cost">{props.expense.fields.expense_cost}</p>
      <p className="income">{props.expense.fields.income}</p>
      {/* <button className='update-button'>Update</button> */}
      <Button variant="contained" color="secondary" onClick={handleDelete}>Delete</Button>
    </div>
  )
}
