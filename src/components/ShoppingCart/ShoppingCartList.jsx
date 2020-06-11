import React, { useContext, useState } from "react";
import { ProductsInCartContext } from "../../Context/ProductsInCartContext";
import "./ShoppingCart.css";
import pizza1 from "../../assets/img/demo1-0901996381-1.jpg";

export default function ShoppingCartList() {
  const [productsInCart, setProductsInCart] = useContext(ProductsInCartContext);


  const HandleRemoveProduct=(id)=>{
     
    let auxProduct=[...productsInCart];
    auxProduct.splice(id,1);
    setProductsInCart(auxProduct); 
    console.log("id to remove",id,auxProduct);
  }

  const getTotal = () => {
    let Total = 0;
    productsInCart.map((product) => {
      Total += parseFloat(product.price);
    });
    console.log("Total Price", Total);
    return Total;
  };

  return (
      
    <div class="collapse " id="multiCollapseExample1">
      <div className="cart-list col">
        {productsInCart.map((product,index) => (
          <div className="row"  key={index}>
            <div className="list-cart-img col-2">
              <img src={pizza1}></img>
            </div>
            <div className="col-6">
              <p>{product.name}</p>
            </div>
            <div className="col-2">
              <p>{product.price}</p>
            </div>
            <div className="col-2">
              <button
                type="button"
                class="ml-2 mb-1 close"
                data-dismiss="toast"
                aria-label="Close"
                onClick={(id)=>HandleRemoveProduct(index)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        ))}
        <div className="list-cart-subtotal">
          <div><p>SubTotal:</p></div>
          <span>{getTotal().toFixed(2)}</span>
        </div>
        <div className="cart-list-button-container">
          <button className="btn btn-warning ">Ordenar</button>
         
        </div>
      </div>
    </div>
  );
}
