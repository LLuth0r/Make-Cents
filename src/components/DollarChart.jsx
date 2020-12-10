import React from "react";
import c3 from "c3";
import { useState, useEffect } from 'react';

const DollarChart = (props) => {
  
    const [dollarArray, setDollarArray] = useState([])
    const [dollarChart, setDollarChart] = useState({});
    const dollarsPerYear = 365;
    const totalSaved = (dollarsPerYear * dollarArray);
    

    useEffect(() => {
      // console.log(props.fields.number_of_years)
    
      if (props.dollar) {
        setDollarChart(c3.generate({
          bindto: "#chart",
          data: {
            columns: [[props.fields.number_of_years]],
            type: "line",
          },
        }))
      }
  }, [props]);
  
  return <div id="chart" />;
};

export default DollarChart;