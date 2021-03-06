
import "./Registro.css"
function Registro() {
  return (
    <div className="cajareg shadow">
      <br />
        <h1><i className="fas fa-user-plus"></i> Nuevo usuario</h1>

      <p className="text-center">Complete los siguientes datos para acceder a nuestra plataforma</p>
      <br />
      <div className="input-group mb-3">
        <span className="input-group-text" id="usuario">Nombre de usuario</span>
        <input type="text" className="form-control" placeholder="ej: ThomYorke" aria-label="Username" aria-describedby="usuario" />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="password">Contraseña</span>
        <input type="password" className="form-control" placeholder="ej: ParanoidAndroid97" aria-label="password" aria-describedby="password" />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="password1">Confirmacion de contraseña</span>
        <input type="password" className="form-control" placeholder="ej: ParanoidAndroid97" aria-label="password1" aria-describedby="password1" />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="mail">E-mail</span>
        <input type="email" className="form-control" placeholder="ej: correo@dominio.com" aria-label="mail" aria-describedby="mail" />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="rol">Tipo</span>
        <fieldset disabled>
          <input type="text" className="form-control" placeholder="cliente" aria-label="tipo" aria-describedby="tipo" />
        </fieldset>
      </div>
      <div className="text-center mt-2 mb-2">
        <button type="button" className="btn btn-secondary btn-lg" data-bs-dismiss="modal">Enviar</button>
      </div>
    </div>
  );
};
export default Registro;