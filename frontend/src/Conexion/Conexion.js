import { axios } from "axios";
import { useState, useEffect } from "react/cjs/react.development";

export function ApiMenu(props){
    //tipo, text
    const [Menues, setMenues] = useState([]);
    let endpoint = '';


    if  (props.tipo ===''){
        endpoint='http://localhost:4000/api/menus/menu'+ props.text;
     };    

    if  (props.tipo ==='categoria'){
        endpoint='http://localhost:4000/api/menus/categoria/'+ props.text;
     };

    const getMenu = async () => axios.get(endpoint).then((res) =>
        setMenues(res.data));

    useEffect(() => getMenu(), []);
    return (Menues);
};

export default function Conexion(props) {
    <>
    <ApiMenu id={props.id} />
    </>    
};