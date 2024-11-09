import Busqueda from "./Busqueda";
import Product from "./Product";

const Products = () => {
    const productos = JSON.parse(localStorage.getItem("productosBusqueda"));
    const busqueda = localStorage.getItem("busqueda");

    return (
        <div>
            <div>
                <Busqueda bar={true} />
            </div>
            <div>
                <h4>Resultados de la búsqueda de {busqueda}: {productos.length}</h4>
                {productos.map((producto, index) => (
                    <Product key={index} product={producto} />
                ))}
            </div>
        </div>
    );
};

export default Products;
