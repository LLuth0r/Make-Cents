import React, { Component } from 'react';
import * as d3 from 'd3';
import './DollarSaved.css';
import { baseURL, config } from '../services';
import axios from 'axios';
import { withRouter } from 'react-router';
import DollarChart from './DollarChart';

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

    // console.log(this.state.saved);
    // const data = parseInt(this.state.saved.number_of_years);
    // console.log(data);
    // // data.push(parseInt(this.state.saved.number_of_years));
    // const dollarsPerYear = 365;
    // const total = (data * dollarsPerYear);
    // console.log(total);
  
    render() {
      return (
        <div className="dollarSaved">
         <h1 className="penniesTitle">100 Pennies Make Cent$</h1>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input
                type='number'
                name='years'
                value={this.state.years}
                onChange={(e) => {
                  this.setState({ years: Number(e.target.value) })
                }} />
              <input type='submit' />
            </form>
          </div>
         <DollarChart />
          <button className='addYear'>+ Year</button>
          <button className='minusYear'>- Year</button>
          <h3>Total $aved</h3>
        </div>
      );
    }
  }

export default withRouter(DollarSaved);
