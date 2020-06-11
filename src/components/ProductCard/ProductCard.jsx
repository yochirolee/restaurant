import React, { useContext, useState } from "react";

import aji from "../../assets/img/aji-picante.svg";
import hoja from "../../assets/img/hoja.svg";
import pizza1 from "../../assets/img/demo1-0901996381-1.jpg";
import Counter from "../Counter/Counter";
import { ProductsInCartContext } from "../../Context/ProductsInCartContext";

export default function ProductCard(props) {
  const { product } = props;
  const [productsInCart, setProductsInCart] = useContext(ProductsInCartContext);
  const [value, setValue] = useState(1);

  const HandleDecrement = () => {
    let auxVal = value;
    if (value > 1) auxVal--;
    setValue(auxVal);
  };
  const HandleIncrement = () => {
    let auxVal = value;
    auxVal++;
    setValue(auxVal);
  };

  const HandleAddProductToCart = (product) => {
    let auxProducts = [];
    auxProducts = [...productsInCart];
    if (value === 1) {
      auxProducts.push(product);
      setProductsInCart(auxProducts);
    } else {
      for (var i = 0; i < value; i++) {
        auxProducts.push(product);
        setProductsInCart(auxProducts);
      }
      setValue(1);
    }
  };

  return (
    <div class="col-lg-3 col-sm-12">
      <div className="card">
        <img src={pizza1} />
        <div className="container-product-name">
          <p>{product.name}</p>
        </div>
        <div>
          <img src={hoja} alt="" />
          <img src={aji} />
        </div>
        <div className="container-ingredients">
          <p>{product.ingredients}</p>
        </div>
        <div className="container-price">{product.price}</div>
        <div className="btn-add-container my-3">
          <Counter
            HandleIncrement={HandleIncrement}
            HandleDecrement={HandleDecrement}
            value={value}
          />
          <button
            className="btn btn-warning"
            onClick={() => HandleAddProductToCart(product)}
          >
            <i className="fa fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
