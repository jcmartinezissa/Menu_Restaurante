import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import {useState} from "react";
import NuevoMenu from "../Conexion/Conexion";


function MenuCreate() {

  const [Nombre, setNombre] = useState();
  const [Imagen, setImagen] = useState();
  //const [Estado, setEstado] = useState();
  const [Precio, setPrecio] = useState();
  const [Detalle, setDetalle] = useState();
  const [Categoria, setCategoria] = useState();


  const [modal, setModal] = useState(false);
  
  const cerrar = () => setModal(!modal);


  return (
    <>    
<Button onClick={cerrar}>Nuevo</Button>

    <Modal  isOpen={modal} toggle={cerrar} >
      <ModalHeader >
        <p  className="h5">Nuevo Menu</p>
      </ModalHeader>
      <ModalBody>
        <br />
        <p className="text-center">Completar todos los campos.</p>
        <br />
        <div className="input-group mb-3">
          <span className="input-group-text" id="Nombre">Nombre del Menu</span>         
          <input type="text" className="form-control" value={Nombre} onChange={(e) => setNombre(e.target.value)} placeholder="ej: Asado de tira" aria-label="Nombre" aria-describedby="Nombre" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="imagen">Imagen</span>
          <input type="password" className="form-control" value={Imagen} onChange={(e) => setImagen(e.target.value)} placeholder="https://asado.com.ar/tira.jpg" aria-label="imagen" aria-describedby="imagen" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="precio">Precio</span>
          <input type="Number" className="form-control" value={Precio} onChange={(e) => setPrecio(e.target.value)}placeholder="ej: 850" aria-label="precio" aria-describedby="precio" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="detalle">Detalle</span>
          <input type="text" className="form-control" value={Detalle} onChange={(e) => setDetalle(e.target.value)}placeholder="bla bla bla..." aria-label="detalle" aria-describedby="detalle" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="categoria">Categoria</span>
          <input type="text" className="form-control" value={Categoria} onChange={(e) => setCategoria(e.target.value)}placeholder="Carnes" aria-label="Carnes" aria-describedby="Carmes" />
        </div>
        <div className="text-center mt-2 mb-2">
         <Button  className="m-2"> onClick={<NuevoMenu nombre={Nombre} imagen={Imagen} precio={Precio} detalle={Detalle} categoria={Categoria}/>} Guardar</Button>     
          <Button  className="m-2" onClick={cerrar}> Cancelar</Button>
        </div>
      </ModalBody>
      <ModalFooter>

      </ModalFooter>
    </Modal>  
    </>

  );
};

export default MenuCreate;