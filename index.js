import React from 'react';
// import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Mainpage from './Components/Mainpage';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  (
   <div> 
    
   <React.StrictMode>
     <BrowserRouter >
     <App />
     <Mainpage />
     </BrowserRouter>
   </React.StrictMode>
  </div>
 )
  
);
