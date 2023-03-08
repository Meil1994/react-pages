import './home.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
      <div class="container-fluid">
        <div class="row nav-row">
          <div class="col-md-4 logo">
            <img src={logo}/>
          </div>

          <div class="col-md-8 nav-bar">
            <ul>
              <Link to='/'><li>HOME</li></Link>
              <Link to='/contactus'><li>CONTACT US</li></Link>
              <Link to='/cars'><li>CARS</li></Link> 
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
export default Header;