import React, { useState, useContext } from "react";
import ProductCard from "./ProductCard";
import "./productCard.css";
import { ProductContext } from "../../Context/ProductContext";
import ShoppingCartList from "../ShoppingCart/ShoppingCartList";

const ProductCardsContainer = (props) => {
  const [products, setProducts] = useContext(ProductContext);

  return (
    <div class="card-container">
      <div class="container">
        <div className="row">
        
            {products.map((product) => (
              <ProductCard product={product} />
            ))}
        

          <ShoppingCartList />
        </div>
      </div>
    </div>
  );
};

export default ProductCardsContainer;
