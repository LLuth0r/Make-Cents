import React from "react";
import c3 from "c3";
import { useState, useEffect } from 'react';


const Chart = (props) => {

  const [incomeArray, setIncomeArray] = useState(['Income']);
  const [expenseArray, setExpenseArray] = useState(['Expense']);
  const [c3Chart, setC3Chart] = useState({});

  useEffect(() => {
    const sortedExpenses = props.expenses.reduce((acc,expense) => {
      
      if (expense.fields.expense) {
        acc.expense.push(expense.fields.expense_cost)
      } else {
        acc.income.push(expense.fields.expense_cost)
      }
      return acc
    }, {
      income: ['Income'],
      expense:['Expense'],
    })
    setIncomeArray(sortedExpenses.income)
    setExpenseArray(sortedExpenses.expense)
  }, [props])

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
      color: {
        pattern:['#45B39D', '#EC7063']
      },
      donut: {
        label: {
          format: function (value) {
            return ('$'+ value.toFixed(2));
          }
        }
      }
    }))
  }, [incomeArray, expenseArray]);

  return <div id="chart" />;
};

export default Chart;