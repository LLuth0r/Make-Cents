import axios from 'axios';
import { budgetURL, config } from '../services';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './AddExpense.css';
import ExpenseChart from './ExpenseChart';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import './Header.css';


const AddExpense = (props) => {

  const useStyles = makeStyles(() => ({
    root: {
      '& .MuiTextField-root': {
        margin: 10
      },
    },
  }));

  const [item, setItem] = useState('');
  const [cost, setCost] = useState('');
  const [expense, setExpense] = useState(false);
  const params = useParams();
  console.log(params);

  async function handleExpenseSubmit(e) {
    e.preventDefault();
    let data = {
      item,
      expense_cost: Number(cost),
      expense,
    };

    await axios.post(budgetURL, { fields: data }, config);
    props.setToggleFetch((prev) => !prev);
    setItem('');
    setCost('');
  };
  
  const handleCheckBox = (e) => {
    setExpense(!expense)
  }

  console.log(expense)
  
  return (
    <div className='add-budget-items'>

      <div className='header'> 
          <img className='cents-logo' src="https://res.cloudinary.com/decd84s0g/image/upload/v1607529656/Make%20Cents/vectorstock_22357186.png" />
          <h1 className="app-title">Vacation Fund$</h1>
      </div> 
      <form className='budget-form'>
        <div className='expenseform'>
        
          <TextField id="outlined-size-small" size="small" label="Income / Expense Item" variant="outlined" value={item} onChange={(e) => { setItem(e.target.value) }}/>
       
          <TextField id="outlined-size-small" size="small" label="$ Amount" variant="outlined" value={cost} onChange={(e) => { setCost(e.target.value) }}/>
       
          <FormControlLabel
            control={
              <Checkbox
            label="Expense?"
            onChange={handleCheckBox}
            inputProps={{'aria-label':'primary checkbox'}}
            value={expense}
          />}
            label="Expense?"
          />         
          
        <Button className='delete-button' variant='contained' color='primary' onClick={handleExpenseSubmit}>Add</Button>
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