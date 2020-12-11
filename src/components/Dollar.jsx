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
import { OutlinedInput } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

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

  };

  return (
  <div>
<div className='header'> 
        <Link to='/'> 
          <img className='cents-logo' src="https://res.cloudinary.com/decd84s0g/image/upload/v1607529656/Make%20Cents/vectorstock_22357186.png" />
          </Link>
          <h1 className="app-title">100 Pennies Make Cent$</h1>
      </div>
      <h4>A Dollar a Day Keeps Post-Retirement Work Away</h4>
      <h5>See how just a dollar a day saved can add up over time.</h5>
      <div>
        <FormControl onSubmit={handleYearSubmit} variant="outlined">
          <TextField id="outlined-basic" label="Current Age" variant="outlined" value={year} onChange={(e) => {setYear(Number(e.target.value))}} />
          <Button variant='contained' color='primary' onClick={handleYearSubmit}>Submit</Button>
        </FormControl>
          </div>
         <DollarChart />
          <Button variant="outlined" color="primary">+ Year</Button>
          <Button variant="outlined" color="secondary">- Year</Button>
          <h3>Total $aved</h3>
  </div>
)
}

export default Dollar;