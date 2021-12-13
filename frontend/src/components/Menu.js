import React from "react";
import hamburguesa from "../components/Menu";
const Menu = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card-wrapper col-lg-4 col-md-6 col-xs-12">
            <div className="card">
              <div className="card-img-efecto card-img-top">
                <img src={hamburguesa} />
              </div>
              <div className="card-body">
                <h5 className="card-title"> Hamburguesa con Papas </h5>
                <div className="card-content">
                  <p className="texto-maridaje">
                    Probá nuestras deliciosas hamburguesas Gourmet acompañadas
                    de unas crujientes papas fritas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
