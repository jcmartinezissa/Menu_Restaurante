import "./Tarjeta.css";

function Tarjeta(props) {
  const { img, titulo, detalle, precio } = props;
  return (
    <>
      <div class="card Tarjeta" style={{ width: "18rem" }}>
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{titulo}</h5>
          <p class="card-text">{detalle}</p>
          <p class="card-text">{precio}</p>
          <a href="#" class="btn btn-primary">
            Añadir
          </a>
        </div>
      </div>
    </>
  );
}

export default Tarjeta;
