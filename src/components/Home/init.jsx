import React, { Fragment, useContext } from "react";


import { FacebookContext } from "../../Context/FacebookContext";
import {HomePage,ProductsPage,PaymentPage} from "../../Pages/HomePage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/**/
export default function Init() {

   const [facebookLogin] = useContext(FacebookContext); 
  

   //facebookLogin.isLogin

  return (facebookLogin.isLogin) ? (
    
          <ProductsPage/> 
    
    
  ) : (
      <HomePage/>
  );


 
}





