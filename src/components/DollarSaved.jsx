import React, { Component } from 'react';
import * as d3 from 'd3';
import './DollarSaved.css';
import { baseURL, config } from '../services';
import axios from 'axios';
import { withRouter } from 'react-router';

class DollarSaved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: [],
      savedId: props.match.params.id,
      rendered: false,
      years:0,
    }

    this.drawChart = this.drawChart.bind(this);
  }
  
  async fetchDollars() {
    const resp = await axios.get(`${baseURL}/${this.state.savedId}`, config);
    console.log(resp.data);
    this.setState({ saved: resp.data.fields });
    this.props.setToggleFetch((prev)=>!prev)
    // console.log(this.state.saved)
  }

  componentDidMount() {
    // this.drawChart();
    this.fetchDollars();
    // console.log(this);
  }

  componentDidUpdate() {
    if (this.state.rendered === false) {
      this.drawChart();
    }
    // console.log('hi');
  }



  drawChart() {
    // console.log(this.state.saved);
    const data = [];
    data.push(parseInt(this.state.saved.total));
    const h = 500;
    const w = 400;
    // console.log(data);
    const svg = d3.select('body')
      .append('svg')
      .attr('width', w)
      .attr('height', h)
      .style('margin-left', 100);
    
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 70)
      .attr('y', (d, i) => h - 10 * d)
      .attr('width', 65)
      .attr('height', (d, i) => d * 10)
      .attr('fill', 'green')
    
    this.setState({rendered: true})
  }

  


  render() {
    // console.log('hello');
    return (
      <div className="dollarSaved">
        {/* <form onSubmit={handleSubmit}>
          <input
            type='number'
            name='years'
            value={this.state.years}
            onChange={(e) => {
            this.setState.years(e.target.value)
            }} />
          <input type='submit'/>
        </form> */}
        <h1 className="penniesTitle">100 Pennies Make Cent$</h1>
        <div></div>
        <div className="dollarChart" id={'#' + this.props.id}></div>
        <h3>Total $aved</h3>
        </div>
    );
  }
}

export default withRouter(DollarSaved);
