 import "./Tarjeta.css";
 
 export default function Tarjeta(props) {   
   return (
    <div className="card">
    <img src={props.imagen} className="card-img-top" alt={props.nombre}/>
    <div className="card-body">
      <h5 className="card-title">{props.nombre}</h5>
      <p className="card-text">{props.detalle}</p>
      <a href="#" className="btn btn-primary">Solicitar</a>
    </div>
  </div>
    
   );
 };