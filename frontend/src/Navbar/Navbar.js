import logo from '../img/logo.png';
import './Navbar.css';
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src= {logo} alt="logo" className="d-inline-block align-text-top" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" aria-current="page" to ="home">Inicio </NavLink>
              <NavLink className="nav-link" to ="login" data-bs-toggle="modal" data-bs-target="#login" >Iniciar sesión</NavLink>
              <NavLink className="nav-link" to ="menu">Menu</NavLink>
              <NavLink className="nav-link" to ="dashboard">DashBoard</NavLink>
              <a className="nav-link disabled" href="#">Nosotres!</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
