import React, { Component } from 'react';
import './DollarSaved.css';
import { baseURL, config } from '../services';
import axios from 'axios';
import { withRouter } from 'react-router';
import DollarChart from './DollarChart';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { useParams } from 'react-router-dom';

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
            <form onSubmit={handleYearSubmit}>
              <input
                type='number'
                name='years'
                value={year}
                onChange={(e) => {
                setYear( Number(e.target.value) )
                }} />
              <input type='submit' />
            </form>
          </div>
         <DollarChart />
          <button className='addYear'>+ Year</button>
          <button className='minusYear'>- Year</button>
          <h3>Total $aved</h3>
  </div>
)
}

export default Dollar;