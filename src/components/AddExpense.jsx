import axios from 'axios';
import { budgetURL, incomeURL, config } from '../services';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './AddExpense.css';
import ExpenseChart from './ExpenseChart';
import { Link } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

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
      <div className='header'> 
        <Link to='/'> 
          <img className='cents-logo' src="https://res.cloudinary.com/decd84s0g/image/upload/v1607529656/Make%20Cents/vectorstock_22357186.png" />
          </Link>
          <h1 className="app-title">Vacation Fund$</h1>
          </div>
      <form className='budget-form'>
        <div className='expenseform'>
          {/* <label htmlFor='expense'>Income / Expense Item:</label> */}
          <TextField id="outlined-size-small" size="small" label="Income/Expense Item" variant="outlined" value={item} onChange={(e) => { setItem(e.target.value) }}/>
        {/* <input
          type='text'
          name='expense'
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        /> */}
          <TextField id="outlined-size-small" size="small" label="$Value" variant="outlined" value={cost} onChange={(e) => { setCost(e.target.value) }}/>
        {/* <label htmlFor='expenseCost'>$Value:</label>
        <input
          type="number"
          name='expense_cost'
            value={cost}
            min="1"
            max="20000"
          onChange={(e) => {
            setCost(e.target.value);
          }}
          /> */}
          {/* <label for="checkbox">Expense?</label> */}
          <FormControlLabel
            control={
              <Checkbox
            label="Expense?"
            onChange={handleCheckBox}
            inputProps={{'aria-label':'primary checkbox'}}
            value={expense}
          />
            }
            label="Expense?"
          />
          {/* <input type="checkbox" id="checkbox" name="checkbox" value={expense} onChange={e=>(handleCheckBox(e))}/> */}
          
        <Button variant='contained' color='primary' onClick={handleExpenseSubmit}>Add</Button>
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