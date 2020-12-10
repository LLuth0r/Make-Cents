import React from "react";
import c3 from "c3";
import { useState, useEffect } from 'react';

const DollarChart = () => {
  
  const [dollarArray, setDollarArray] = useState([])
  const [dollarChart, setDollarChart] = useState({});
  
  c3.generate({
          bindto: "#chart",
          data: {
            columns: [365,730,1095, 1460,1825,2190,2555,2920,3285,3650],
            type: "line",
          },
        });
  
  return <div id="chart" />;
};

export default DollarChart;