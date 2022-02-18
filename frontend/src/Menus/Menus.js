import ApiMenu from "../Conexion/Conexion";
import Tarjeta from "../Tarjeta/Tarjeta"
import "./Menus.css";


function Menus() {
    const menues =ApiMenu(0);
    return (
        <div >
            <div className="m-4 p-4">
                <h1><i className="fas fa-utensils"></i> Nuestros platos</h1>
            </div>
            <p className="m-2 p-2">Elije una categoria</p>
            <div className="row">
                <div className="col-6">
                    <select className="form-select form-select-sm" aria-label=".form-select-sm" defaultValue={"Hamburguesas"}>
                        <option value="1">Pizzas</option>
                        <option value="2">Carnes</option>
                        <option value="3">Pastas</option>
                        <option value="4">Platos</option>
                        <option value="5">Hamburguesas</option>                        
                    </select>
                </div>
            </div>
               <div className= "shadow m-2 p-2">
            </div>
        </div>
    );

}
export default Menus;