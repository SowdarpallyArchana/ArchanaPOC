import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
   function Menu() {
      return (
         <div>
       <h2>Customer App</h2>
          
          <Link to={'/Dashboard'}>Dashboard</Link> |
          <Link to={'/About'}>About</Link> | 
          <Link to={'/Team'}>Team</Link> 
        <hr />
         </div>
      );
   }
    export default Menu;

    