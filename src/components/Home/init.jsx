import React, { Fragment, useContext } from "react";

import NavBarLogged from "../../components/NavBar/navbarLogged";
import Home from "./home";
import ProductCardsContainer from "../../components/ProductCard/productCardsContainer";
import { ProductProvider } from "../../Context/ProductContext";
import { ProductsInCardProvider } from "../../Context/ProductsInCartContext";
import NavBarBoostrap from "../../components/NavBar/navBarBoostrap";
import { FacebookContext, FacebookProvider } from "../../Context/FacebookContext";
import { useEffect } from "react";
import Facebook from "../../components/Social/facebook";
/**/
export default function Init() {

   const [facebookLogin, setFacebookLogin] = useContext(FacebookContext);
  



  return facebookLogin.isLogin ? (
    <ProductsInCardProvider>
      
        <NavBarLogged />
      
      <ProductProvider>
        <ProductCardsContainer />
      </ProductProvider>
    </ProductsInCardProvider>
  ) : (
    <Fragment>
      <NavBarBoostrap /> 
      <Home />
    </Fragment>
  );
}


