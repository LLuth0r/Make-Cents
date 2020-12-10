import React from 'react'
import { budgetURL, config } from '../services';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

export default function BudgetTable(props) {

  const handleDelete = async() => {
    const itemURL = `${budgetURL}/${props.expense.id}`;
    await axios.delete(itemURL, config);
    props.setToggleFetch((prev) => !prev);
  }

  return (
    <div className="budget-table">
      
      <p className="expense">{props.expense.fields.item}</p>
      <Divider variant="middle" />
      <p className="expense-cost">{props.expense.fields.expense_cost}</p>
      <Divider variant="middle" />
      <p className="income">{props.expense.fields.income}</p>
      <Button variant="contained" color="secondary" onClick={handleDelete}>Delete</Button>
      
    </div>
  )
}
