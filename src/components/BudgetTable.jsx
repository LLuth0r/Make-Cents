import React from 'react'
import { budgetURL, config } from '../services';
import axios from 'axios';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

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
      
      <IconButton aria-label="delete" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
      
    </div>
  )
}
