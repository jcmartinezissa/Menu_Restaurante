
function MenuCreate (props){
    return(
        <div className="cajareg shadow">
      <br />
        <h1><i className="fas fa-user-plus"></i> Nuevo Menu</h1>

      <p className="text-center">Completar todos los campos.</p>
      <br />
      <div className="input-group mb-3">
        <span className="input-group-text" id="Nombre">Nombre del Menu</span>
        <input type="text" className="form-control" placeholder="ej: Asado de tira" aria-label="Nombre" aria-describedby="Nombre" />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="imagen">Imagen</span>
        <input type="password" className="form-control" placeholder="https://asado.com.ar/tira.jpg" aria-label="imagen" aria-describedby="imagen" />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="precio">Precio</span>
        <input type="Number" className="form-control" placeholder="ej: 850" aria-label="precio" aria-describedby="precio" />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="detalle">Detalle</span>
        <input type="text" className="form-control" placeholder="bla bla bla..." aria-label="detalle" aria-describedby="detalle" />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="categoria">Categoria</span>
          <input type="text" className="form-control" placeholder="Carnes" aria-label="Carnes" aria-describedby="Carmes" />
      </div>
      <div className="text-center mt-2 mb-2">
        <button type="button" className="btn btn-secondary btn-lg" data-bs-dismiss="modal">Enviar</button>
      </div>
    </div>
    );
}

export default MenuCreate;