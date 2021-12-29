import logo from '../img/logo.png';
function Footer() {
    return (
        <>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    <img src={logo} alt="logo"/>
                </a>
                <span className="text-muted">© 2021 Comisión 14i - Grupo 1 </span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a href="#" >Twitter</a></li>
                <li className="ms-3"><a href="#" >Facebook</a></li>
                <li className="ms-3"><a href="#" >Instagram</a></li>
                <li className="ms-3"><a href="#" >Contacto</a></li>
            </ul>
        </footer>
        </>


    );
}
export default Footer;