import logo from "../../img/logo.png";
function Footer() {
  return (
    <>
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <a
            href="/"
            class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <img src={logo} />
          </a>
          <span class="text-muted">© 2021 Comisión 14i - Grupo 1 </span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3">
            <a>Twitter</a>
          </li>
          <li class="ms-3">
            <a>Facebook</a>
          </li>
          <li class="ms-3">
            <a>Instagram</a>
          </li>
          <li class="ms-3">
            <a>Contacto</a>
          </li>
        </ul>
      </footer>
    </>
  );
}
export default Footer;
