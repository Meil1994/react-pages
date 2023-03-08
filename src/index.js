import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ContactUs from './routes/contactus'
import Cars from './routes/cars'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
     <Routes>
         <Route path='/' element={ <App />} />
         <Route path='/contactus' element={ <ContactUs />} />
         <Route path='/cars' element={ <Cars />} />
         
     </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


