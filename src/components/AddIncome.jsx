import axios from 'axios';
import { incomeURL, config } from '../services';
import React, { useState } from 'react';

const AddIncome = (props) => {

  const [income, setIncome] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    let data = {
     income,
    };

    await axios.post(incomeURL, { fields: data }, config);
    props.setToggleFetch((prev) => !prev);    
};
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className='income'> 
        <label htmlFor='income'>Income</label>
        <input
          type='number'
          name='income'
          value={income}
          onChange={(e) => {
            setIncome(e.target.value);
          }}
          />
          </div>
          </form>
          <button className='button'>Submit</button>
          <button className='button'>Update</button>
          </div>
  )
}
 
export default AddIncome;