import React from 'react';
import './login.css';
import {Link} from "react-router-dom";
function Login(){
  return (
   
    <div>  
    <head>
      
      <title>MenX</title>
     
    </head>
    <body className='Body-con'>
      <div class="container">
        <form action="#" method='get'>
          <div class="login-container">
            <h1 class="login-title">MenX </h1>
    
            <div class="input-group">
              <label  class="input-label1">Name</label>
              <input type="text" class="input-field" required></input>
            </div>
    
            <div class="input-group">
              <label  class="input-label">Phone Number</label>
            
              <input type="tel"  class="input-field" required maxLength="10"></input>
             <Link to='/userpage'>
            <button type='submit' className='submit-button' >ENTER</button>
            </Link> </div>
        </div>
        
        </form>
      </div>
     
    </body>
    
    </div>
   
  );
}

export default Login;