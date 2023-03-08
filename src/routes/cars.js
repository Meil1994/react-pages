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
              <Link to='/contactus'><li>CONTACT US</li></Link>
          </ul>
        </div>
      </div>
      <div class="car-content">
         <img src={car}/>
         <p>Bugatti has figured out the formula for ultimate top speed… add horsepower, reduce mass, and tweak aerodynamics. The Chiron Super Sport 300+ features an 8-liter, quad-turbo, W16 engine boosted to 1,577 horsepower. Magnesium wheels and titanium exhaust help shed unnecessary mass. Combine the power increase and weight loss with revised aerodynamics, and the Super Sport 300+ is able to break through the hallowed 300 mph barrier, hitting a certified 304.7 mph.</p>
      </div>
    </div>
  )
}

export default cars