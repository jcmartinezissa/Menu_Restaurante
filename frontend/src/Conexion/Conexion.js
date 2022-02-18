import axios from "axios";
import { useState, useEffect } from "react/cjs/react.development";

function ApiMenu() {
    //tipo, text
    const [Menues, setMenues] = useState([]);

    let endpoint = 'http://localhost:4000/api/menus';

    const getMenu = async () => {
        const response = await axios.get(endpoint);
        setMenues(response.data.Menu);
    }

    useEffect(() => { getMenu() }, [getMenu]);

    return (Menues);
};

function NuevoMenu(props) {
    const [Nuevo, setNuevo] = useState(null);
    const datos = {
        nombre: props.nombre,
        imagen: props.imagen,
        estado: props.estado,
        precio: props.precio,
        detalle: props.detalle,
        categoria: props.categoria
    };
    
    const endpoint = 'http://localhost:4000/api/menus/nuevo';

    useEffect(()=>{
        axios.post(endpoint, {datos})
        .then(res=>setNuevo(res.data));
    },[]);

    return (Nuevo);
};

export default {ApiMenu, NuevoMenu};
