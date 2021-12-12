import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img src={logo} alt="" class="d-inline-block align-text-top" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
              <Link class="nav-link" to="/registro">
                Registro
              </Link>
              <Link class="nav-link" to="/menu">
                Menu
              </Link>
              <Link class="nav-link" to="/nosotros">
                Nosotros
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
