import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'lightslategray',
};

const Navbar = () => {
  const amount =useSelector(state => state.amount )
  return (
    <div className='nav'>
      <h2>Bank Of India</h2>
      <div className='opt'>
        <Link className='Home' to="/" style={linkStyle}>Home</Link>
         <Link className='About' to="/about" style={linkStyle} >About</Link>
      </div> 
      <div className='bal'>
      <h3>Balance : {amount}</h3> 
      </div>  
    </div>
  )
}

export default Navbar
