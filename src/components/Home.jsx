import React from 'react'
import './Home.css';
import './Header.css';
import { Link } from 'react-router-dom';



export default function Home(props) {
  console.log(props.dollars.length);
  if (props.dollars.length > 0) {
    
    return (
      <div className="navbar">
        <div className='header'> 
        <img className='cents-logo' src="https://res.cloudinary.com/decd84s0g/image/upload/v1607529656/Make%20Cents/vectorstock_22357186.png" />
          <h1 className="app-title">Make Cent$</h1>
          </div>
        <div className="Dollars">
          <Link to={`/Dollar/${props.dollars[0].id}`} >
              <img className="dollaricon" src="https://res.cloudinary.com/decd84s0g/image/upload/v1607574767/Make%20Cents/clipart773965.png" alt=''/>
          </Link>
          <p className="dollarsdesc">If you started saving a dollar a day, how much would you have saved up by the time you retire at age 65?  
        </p>
          <h2 className='pennies'>100 Pennies Make Cent$</h2>
        </div>
        
          <div className="Vacation">
            <Link to={`/Budget/`} >
              <img className="dollaricon" src="https://res.cloudinary.com/decd84s0g/image/upload/v1607574667/Make%20Cents/clipart1962599.png" alt="Money Savings Icon"/>
          </Link>
            <p>Growing up sucks.  Bills, expenses, 10 car warranty calls a day, yuck.  Let's make budgeting fun and find those...</p>
            <h2 className="vacay-funds">Vacation Fund$</h2>
          </div>
      </div>
    )
  } else {
    return <div><iframe src="https://giphy.com/embed/oGzFZek2lszlK" width="480" height="259" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/help-big-bang-theory-me-oGzFZek2lszlK">via GIPHY</a></p></div>
  }
}