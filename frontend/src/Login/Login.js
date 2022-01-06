import { NavLink } from "react-router-dom"

import "./Login.css"
function Login() {
  return (
    <>
      <div className="modal fade" tabIndex="-1" id="login"  aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="titulomodal">Bienvenido</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body caja">

              <h1><i className="fas fa-sign-in-alt"></i> Iniciar sesión</h1>
              <br />
              <p className="text-center">Para realizar un pedido debes iniciar sesion</p>
              <br />
              <div className="mb-3 row">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="usuario"><i className="fas fa-user"></i></span>
                  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="usuario" />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="clave"><i className="fas fa-lock"></i></span>
                  <input type="password" className="form-control" aria-label="Sizing example input" aria-describedby="clave" />
                </div>
                <div className="text-center mt-2 mb-2">
                  <button type="button" className="btn btn-secondary btn-lg" data-bs-dismiss="modal">Entrar</button>
                </div>
                <div className="text-center mt-2 mb-2">
                  <a href='#'>Olvide mi contraseña</a>
                </div>
              </div>
              <div className="modal-footer">
                <p>¿No tienes cuenta?,  <NavLink to="registro" >Regístrate</NavLink> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;