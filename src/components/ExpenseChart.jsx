import React from "react";
import c3 from "c3";
import { useState, useEffect } from 'react';


const Chart = (props) => {

  const [incomeArray, setIncomeArray] = useState(['income']);
  const [expenseArray, setExpenseArray] = useState(['expense']);
  const [c3Chart, setC3Chart] = useState({});

  // console.log(incomeArray)
  
  useEffect(() => {
    props.expenses.forEach(expense => {
      // console.log(expense.fields)
      
      const arr1 = ['Income']
      const arr2 = ['Expense']

      if (expense.fields.expense) {
        arr2.push(expense.fields.expense_cost)
        setExpenseArray(arr2)
      } else {
        arr1.push(expense.fields.expense_cost)
        setIncomeArray(arr1)
      }
    }
      )
},[props])

  useEffect(() => {
    console.log(props)
    setC3Chart(c3.generate({
      bindto: "#chart",
      data: {
        columns: [
          incomeArray,expenseArray
        ],
        type: "donut",
      },
    }))
  }, [incomeArray, expenseArray]);

  
  return <div id="chart" />;
};

export default Chart;