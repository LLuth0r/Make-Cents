import React from 'react'
import { budgetURL, config } from '../services';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function BudgetTable(props) {

  const handleDelete = async () => {
    const fullURL = `${budgetURL}/${props.expense.id}`;
    await axios.delete(fullURL, config);
    props.setToggleFetch((prev) => !prev);
  }

  return (
    <div>
      <p>{props.expense.fields.item}</p>
      <p>{props.expense.fields.expense_cost}</p>
      <p>{props.expense.fields.income}</p>     
    </div>
  )
}
