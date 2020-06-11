import React, { Fragment } from "react";
import "./App.css";
import NavBarLogged from "./components/NavBar/navbarLogged";
import NavBar from "./components/NavBar/navBar";
import ProductCard from "./components/ProductCard/ProductCard";
import Home from "./components/Home/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductCardsContainer from "./components/ProductCard/productCardsContainer";
import { ProductProvider } from "./Context/ProductContext";
import { ProductsInCardProvider } from "./Context/ProductsInCartContext";
import NavBarBoostrap from "./components/NavBar/navBarBoostrap";
import Facebook from "./components/Social/facebook";
/*<ProductsInCardProvider>
        <NavBarLogged />

        <ProductProvider>
          <ProductCardsContainer />
        </ProductProvider>
      </ProductsInCardProvider>*/
function App() {
  return (
    <Fragment>
        <NavBarBoostrap/>
      
        <Home/>
    </Fragment>
  );
}

export default App;
