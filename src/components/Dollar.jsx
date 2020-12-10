import React, { Component } from 'react';
import './DollarSaved.css';
import { baseURL, config } from '../services';
import axios from 'axios';
import { withRouter } from 'react-router';
import DollarChart from './DollarChart';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { OutlinedInput } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

const Dollar = (props) => {
  
  const [year, setYear] = useState('');
  const params = useParams();
  console.log(params);


  async function handleYearSubmit(e) {
    e.preventDefault();
    let data = {
      number_of_years: Number(year),
    };

    await axios.post(baseURL, { fields: data }, config);
    // props.setToggleFetch((prev) => !prev);
  };

  return (
  <div>
<div className='header'> 
        <Link to='/'> 
          <img className='cents-logo' src="https://res.cloudinary.com/decd84s0g/image/upload/v1607529656/Make%20Cents/vectorstock_22357186.png" />
          </Link>
          <h1 className="app-title">100 Pennies Make Cent$</h1>
      </div>
      <div>
        <FormControl onSubmit={handleYearSubmit} className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={year}
            onChange={(e) => {
              setYear(Number(e.target.value))
            }}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>
        {/* <form onSubmit={handleYearSubmit}>
          
              <input
                type='number'
                name='years'
                value={year}
                onChange={(e) => {
                setYear( Number(e.target.value) )
                }} />
              <input type='submit' />
            </form> */}
          </div>
         <DollarChart />
          <Button variant="outlined" color="primary">+ Year</Button>
          <Button variant="outlined" color="secondary">- Year</Button>
          <h3>Total $aved</h3>
  </div>
)
}

export default Dollar;