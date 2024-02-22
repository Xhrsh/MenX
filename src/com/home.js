import React, { useState } from 'react';
import './login.css';

const Login =()=>{
 
    let[id,set]=useState("");
  let pass=8668161380
  
  return (
   
    <div>  
    <head>
      
      <title>MenX</title>
     
    </head>
    <body className='Body-con'>
      <div class="container">

        <form action={id==pass ?"/adminpage":"/userpage"}>
          <div class="login-container">
            <h1 class="login-title">MenX </h1>
    
            <div class="input-group">
              <label  class="input-label1">Name</label>
              <input type="text" class="input-field" required></input>
            </div>
    
            <div class="input-group">
              <label  class="input-label">Phone Number</label>
            
              <input type="tel"  class="input-field" required maxLength="10" onChange={(e)=>set(e.target.value)}></input>
         
            <button type='submit' className='submit-button' >ENTER</button>
           </div>
        </div>
        
        </form>
      </div>
     
    </body>
    
    </div>
   
  );
}

export default Login;