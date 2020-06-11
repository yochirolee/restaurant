import React, { useContext, useState } from "react";
import { ProductsInCartContext } from "../../Context/ProductsInCartContext";

export default function ShoppingCartCount(props) {
  const [productsInCart, setProductsInCart] = useContext(ProductsInCartContext);

  const [show, setShow] = useState(true);

  const Toggle = () => {
    let ele = document.getElementById("multiCollapseExample1");
    show ? ele.classList.add("show") : ele.classList.remove("show");
    setShow(!show);
  };

  const HandleOnMouseLeave=()=>
  {
    //for Implement
  }

  return (
    <button
      id="btn-cart"
      className="btn btn-lg btn-outline-dark"
      onClick={Toggle} onMouseLeave={HandleOnMouseLeave}
    >
      <a id="cart" href="#">
        <i className="fa fa-shopping-cart"></i>
        <i
          className="badge badge-danger"
          data-toggle="collapse"
          href="#multiCollapseExample1"
        >
          {productsInCart.length}
        </i>
      </a>
    </button>
  );
}
