
import ApiMenu from "../Conexion/Conexion";
import MenuCreate from "../Menus/MenuCreate";
import {useState} from "react";


function tablaMenu() {
    const Listado = ApiMenu();

    function fila(_id, nombre, precio) {

        return (
            <tr>
                <th scope="row">{_id}</th>

                <td>{nombre}</td>
                <td>{precio}</td>
                <td>
                    <i className=" m-1 fas fa-edit btn-outline-warning h5"  ></i>
                    <i className="m-1 fas fa-trash-alt btn-outline-danger h5"></i>
                </td>
            </tr>
        );
    };

    return (

        <table className="table table-hover table-sm">
            <thead>
                <tr>
                    <th scope="col">Categoria</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Controles</th>
                </tr>
            </thead>
            <tbody>
                {Listado.map((i) => fila(i._id, i.nombre, i.precio))}
            </tbody>
        </table>
    );
};



function Dashboard() {

    return (
        <>
            <div className="m-4 p-4">
                <h1> <i className="fas fa-tools"></i> Tablero de Gestión</h1>
                <p className="m-2 p-2">Aqui puedes consultar y actualizar los parametros del sistemas como tablas y demas.</p>
            </div>
            <div className="row shadow m-2">
                <div className="col">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="menu-tab" data-bs-toggle="tab" data-bs-target="#menu" type="button" role="tab" aria-controls="menu" aria-selected="true">Menus</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">                    
                        <div className="tab-pane fade show active" id="menu" role="tabpanel" aria-labelledby="menu-tab">
                        <div className="m-2 p-2"> 
                         <div>
                         <MenuCreate/>
                         </div>      
                        {tablaMenu()}                      

                        </div>                            
                            </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                    </div>

                    
                </div>

            </div>
        </>
    );
}

export default Dashboard;
