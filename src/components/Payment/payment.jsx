import React, { useContext } from "react";
import "./payment.css";
import { ProductsInCartContext } from "../../Context/ProductsInCartContext";

export default function Payment() {
  const [productsInCart, setProductsInCart] = useContext(ProductsInCartContext);

  console.log("Product in CART in PAYMENT",productsInCart);
  return (
    <div className="payment-container">
      <div className="container mt-5 payment-wrapper">
        <div className="row">
          <div className="col-lg-8 col-sm-12   payment-left-side">
            <div className="row">
              <div className="col-6">
                <p className="mx-auto">
                  Por favor, llene y revise su informacion y los productos de su
                  Orden, si todo esta correcto, Proceda a Realizar el Pedido en
                  30 min estaremos en SU CASA
                </p>
              </div>
              <div className="col-6">
                <form>
                  <div class="form-group  mx-auto">
                    <label for="exampleInputEmail1">Nombre</label>
                    <input type="text" class="form-control"></input>

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
              </div>
            </div>
          </div>

          <div className=" col-lg-4  col-sm-12 payment-right-side">
            <div className=" payment-card">
              <div className="row row-card-payment">
                <h5 className="col-8">Productos</h5>
                <p className="col-4"> Precio</p>
              </div>

              {productsInCart.map((product) => (
                <div className=" row payment-products-detail">
                  <p className="col-8">{product.name}</p>
                  <p className="col-4">
                    {product.price}
                    <span> cuc</span>
                  </p>
                </div>
              ))}
              <div className="row payment-card-subtotal">
                <h5 className="col-8">SubTotal:</h5>
                <p className="col-4">
                  4.90<span> cuc</span>
                </p>
              </div>

              <div className="row payment-card-total">
                <h5 className="col-8">Total:</h5>
                <p className="col-4">
                  4.90<span> cuc</span>
                </p>
              </div>

              <div>
                <button className="btn btn-block btn-dark">Ordenar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
