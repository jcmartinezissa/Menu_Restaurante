 import "./Tarjeta.css";
 
 export default function Tarjeta(props) {   
   return (
    <div class="card">
    <img src={props.imagen} class="card-img-top" alt={props.nombre}/>
    <div class="card-body">
      <h5 class="card-title">{props.nombre}</h5>
      <p class="card-text">{props.detalle}</p>
      <a href="#" class="btn btn-primary">Solicitar</a>
    </div>
  </div>
    
   );
 };