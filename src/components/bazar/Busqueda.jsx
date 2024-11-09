import { useEffect } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Busqueda = ( { bar }) => {
    const [busqueda, setBusqueda] = useState("");
    const [productos, setProductos] = useState([]);
    const buscar = () => {
        fetch(`https://examen-v2-2.vercel.app/api/get-data?search=${busqueda}`)
            .then((res) => res.json())
            .then((data) => {
                setProductos(data);
                console.log(data);
                
                localStorage.setItem("productosBusqueda", JSON.stringify(data));
                localStorage.setItem("busqueda", busqueda);
            });
    };

    useEffect(() => {
        buscar();
    },  [busqueda]);

    return (
        <div className={bar ? "d-flex justify-content-between align-items-center p-3 border-bottom" : "p-3 border-bottom gap-5"}>
            
            <img src="https://static.vecteezy.com/system/resources/previews/006/692/940/non_2x/handbag-icon-template-black-color-editable-handbag-icon-symbol-flat-illustration-for-graphic-and-web-design-free-vector.jpg" alt="" className="border border-dark rounded-circle m-3 " style={{height: "100px"}} />
            <input
                type="text"
                onChange={(e) => setBusqueda(e.target.value)}
                value={busqueda}
                className="form-control w-50 "
                placeholder="search"
            />
            <a href="/items" className="btn btn-secondary mt-2">Buscar</a>
        </div>
    );
};

export default Busqueda;
