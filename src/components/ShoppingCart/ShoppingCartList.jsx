import React, { useContext, Fragment } from "react";
import { ProductsInCartContext } from "../../Context/ProductsInCartContext";
import "./ShoppingCart.css";
import {FacebookContext} from "../../Context/FacebookContext";

import { Link } from "react-router-dom";

export default function ShoppingCartList(props) {
  const [productsInCart, setProductsInCart] = useContext(ProductsInCartContext);
  const [facebookLogin, setFacebookLogin] = useContext(FacebookContext);

  console.log("PRODUCTS IN CART",productsInCart);
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
      <Fragment>
    <div class="collapse " id="multiCollapseExample1">
    <div className=" payment-card">
        <form>
                  <div class="form-group  mx-auto">
                    <label for="exampleInputEmail1" >Nombre</label>
                    <input type="text" class="form-control" value={facebookLogin.name}></input>

                    <label for="exampleInputEmail1">Telefono</label>
                    <input type="text" class="form-control"></input>

                    <label for="exampleInputEmail1">Direccion</label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                </form>
              <div className="row row-card-payment">
                <h5 className="col-8">Productos</h5>
                <h5 className="col-4"> Precio</h5>
              </div>

              {productsInCart.map((product,index) => (
                <div className=" row payment-products-detail"  key={index}>
                  <p className="col-8">{product.name}</p>
                  <p className="col-4">
                    {product.price}
                    <span> cuc</span> <button
                type="button"
                class="ml-2 mb-1 close"
                data-dismiss="toast"
                aria-label="Close"
                onClick={(id)=>HandleRemoveProduct(index)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
                  </p>
                </div>
              ))}
              <div className="row payment-card-subtotal">
                <h5 className="col-8">SubTotal:</h5>
                <p className="col-4">
                {getTotal().toFixed(2)}<span> cuc</span>
                </p>
              </div>

              <div className="row payment-card-total">
                <h4 className="col-8">Total:</h4>
                <p className="col-4">
                {getTotal().toFixed(2)}<span> cuc</span>
                </p>
              </div>

              <div>
                <button className="btn btn-block btn-dark">Ordenar</button>
              </div>
            </div>
     
    </div>

   
    
     </Fragment>
  );
}
