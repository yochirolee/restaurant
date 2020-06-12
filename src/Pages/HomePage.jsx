import React, { Fragment } from "react";
import NavBarBoostrap from "../components/NavBar/navBarBoostrap";
import Home from "../components/Home/home";
import { ProductsInCardProvider } from "../Context/ProductsInCartContext";
import NavBarLogged from "../components/NavBar/navbarLogged";
import { ProductProvider } from "../Context/ProductContext";
import ProductCardsContainer from "../components/ProductCard/productCardsContainer";
import Payment from "../components/Payment/payment";

export const HomePage = () => {
  return (
    <Fragment>
      <NavBarBoostrap />
      <Home />
    </Fragment>
  );
};

export const ProductsPage = () => {
  return (
    <ProductsInCardProvider>
      <NavBarLogged />
      <ProductProvider>
        <ProductCardsContainer />
      </ProductProvider>
    </ProductsInCardProvider>
  );
};
  
  export const PaymentPage=()=>
  {
      return (
       
      <ProductsInCardProvider>
        <NavBarLogged />
        <Payment/>
      </ProductsInCardProvider>
   
      )
  }



