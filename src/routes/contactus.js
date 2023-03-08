import React from 'react'
import './routes.css'
import logo from '../assets/logo.png'
import car from '../assets/car.jpeg'
import { Link } from 'react-router-dom';

const cars = () => {
  return (
    <div class="container-fluid">
      <div class="row nav-row">
        <div class="col-md-4 logo">
           <img src={logo}/>
        </div>
        <div class="col-md-8 nav">
          <ul>
              <Link to='/'><li>HOME</li></Link>
              <Link to='/cars'><li>CARS</li></Link> 
          </ul>
        </div>
      </div>
         <div class="title">
          <h4>
            Send Us A Message..
          </h4>
         </div>
         <form class="form">
            <input
              type="text"
              placeholder='Input your email here..'
            ></input>
            <br/>
            <input
              type="text"
              placeholder='Input your name here..'
            ></input>
            <br/>
            <input
              type="text"
              placeholder='Input your message here..'
              class="message"
            ></input>
            <br/>
            <button>SUBMIT</button>

         </form>
      <div>

      </div>
    </div>
  )
}

export default cars