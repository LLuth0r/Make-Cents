import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home(props) {
  // console.log(props.dollars);
  if (props.dollars.length>0) {
    return (
      <div className="navbar">
        <h1 className="app-title">Make Cent$</h1>
        <div className="Dollars">
          <Link to={`/DollarSaved/${props.dollars[0].id}`} >
            <div>
              <img className="dollaricon" src="https://res.cloudinary.com/decd84s0g/image/upload/v1607221870/Make%20Cents/bank.png" />
            </div>
          </Link>
          <p className="dollarsdesc">If you saved just a dollar a day, how much would you save over the years?
          You're never too old to start saving for your future.
        </p>
          <h2 className='pennies'>100 Pennies Make Cent$</h2>
        </div>
        <div className="Traveler">
          <p>Do you want to go back in time and be one of the early investors in Apple, Tesla,
          Disney, or something else? Let's become...
        </p>
          <h2>Time Traveler$</h2>
          <div className="Vacation">
            <Link to={`/Form/`} >
            <div>
              <img className="dollaricon" src="https://res.cloudinary.com/decd84s0g/image/upload/v1607221870/Make%20Cents/bank.png" />
            </div>
          </Link>
            <p>Growing up sucks.  Bills, expenses, 10 car warranty calls a day, yuck.  Let's make budgeting fun and find those...</p>
            <h2>Vacation Fund$</h2>
          </div>
        </div>
      </div>
    )
  } else {
    return <div></div>
  }
}