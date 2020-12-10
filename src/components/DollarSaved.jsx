import React, { Component } from 'react';
import * as d3 from 'd3';
import './DollarSaved.css';
import { baseURL, config } from '../services';
import axios from 'axios';
import { withRouter } from 'react-router';
import DollarChart from './DollarChart';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class DollarSaved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: [],
      savedId: props.match.params.id,
      rendered: false,
      years: 0,
    }
  }
  
  async fetchDollars() {
    const resp = await axios.get(`${baseURL}/${this.state.savedId}`, config);
    console.log(resp.data);
    this.setState({ saved: resp.data.fields });
    this.props.setToggleFetch((prev) => !prev)
    // console.log(this.state.saved)
  }

  async submitYears() {
    
    const resp = await axios.post(baseURL, { fields: { number_of_years: this.state.years } }, config);
    // this.props.setToggleFetch((prev) => !prev);
    console.log(resp)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // const data = {
    //   years,
    this.submitYears()
  }

  componentDidMount() {
    // this.drawChart();
    this.fetchDollars();
    // console.log(this);
  }

  componentDidUpdate() {
    if (this.state.rendered === false) {
    }
  }
  
    render() {
      return (
        <div className="dollarSaved">
          <div className='header'>
           <Link to='/'>
              <img className='cents-logo' src="https://res.cloudinary.com/decd84s0g/image/upload/v1607529656/Make%20Cents/vectorstock_22357186.png" />
              </Link> 
          <h1 className="app-title">100 Pennies Make Cent$</h1>
          </div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <TextField
                id="outlined-size-small"
                size="small"
                label="# of Years"
                type='number'
                value={this.state.years}
                onChange={(e) => {
                  this.setState({ years: Number(e.target.value) })
                }} />
              <Button variant="contained" color="primary" type='submit' />
            </form>
          </div>
         <DollarChart />
          <Button variant="outlined" color="primary">+ Year</Button>
          <Button variant="outlined" color="primary">- Year</Button>
          <h3>Total $aved</h3>
        </div>
      );
    }
  }

export default withRouter(DollarSaved);
