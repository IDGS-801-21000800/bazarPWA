import { useEffect, useState } from "react";
import Busqueda from "./Busqueda";
import Product from "./Product";

const Sales = () => {
    const [sales, setSales] = useState([]);

    //petición a https://examen-v2-2.vercel.app/api/get-sales para obtener sales
    useEffect(() => {
        fetch("https://examen-v2-2.vercel.app/api/get-sales")
            .then((res) => res.json())
            .then((data) => {
                setSales(data);
            });
    }, []);

    return (
        <div>
            <div>
            <Busqueda bar={true} />
            </div>
            <div>
                {sales.map((producto, index) => (
                    <Product key={index} product={producto.product} />
                ))}
            </div>
        </div>
    );
};

export default Sales;
