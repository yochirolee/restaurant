import React from "react";

export default function Home() {
  return (
    <div className="header">
      <div className="heading-container-left">
        <div className="left-info">
          <h1>Entrega Gratis!!!</h1>
          <ul className="navbar-nav">
            <li className="nav-item">
              <i className="fa fa-phone-alt"> </i> +53 7 303-33-33
            </li>
            <li className="nav-item">
              <i className="fa fa-clock"> </i> Todos los dias de 11:00 AM - 23:00 PM
            </li>
          </ul>
        </div>
      </div>

      <div className="heading-container-right ">
        <form className="col-8">
          <div>
            <div className="mb-3">
              <label for="validationServer01">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="validationServer01"
                required
              ></input>
            </div>
            <div className="mb-3">
              <label for="validationServer02">Telefono</label>
              <input
                type="text"
                className="form-control"
                id="validationServer02"
                required
              ></input>
            </div>
          </div>
          <div>
            <div className="mb-3">
              <label for="validationServer03">Direccion</label>
              <input
                type="text"
                className="form-control"
                id="validationServer03"
                required
              ></input>
            </div>
            <div className="mb-3">
              <label for="validationServer04">Municipio</label>
              <select className="custom-select" id="validationServer04" required>
                <option selected disabled value="">
                  Seleccione
                </option>
                <option>Playa</option>
                <option>Vedado</option>
                <option>Cerro</option>
                <option>Centro Habana</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck3"
                required
              />
              <label className="form-check-label" for="invalidCheck3">
                Acepto los Terminos y Condiciones
              </label>
              <div className="invalid-feedback">
                Por Favor, Acepte los Terminos y Condiciones.
              </div>
            </div>
          </div>
          <button className="btn btn-warning" type="submit">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}
