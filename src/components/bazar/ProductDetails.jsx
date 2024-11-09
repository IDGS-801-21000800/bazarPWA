import { useParams } from "react-router-dom";
import Busqueda from "./Busqueda";
import { useEffect, useState } from "react";

const ProductDetails = () => {
    const { id } = useParams();

    const [product, setproduct] = useState({});
    const [cantidad, setCantidad] = useState(1);

    useEffect(() => {
        fetch(
            `https://examen-v2-2.vercel.app/api/get-details-products?id=${id}`
        )
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Error en la respuesta de la API");
                }
                return res.json();
            })
            .then((data) => {
                setproduct(data);
            })
            .catch((error) => {
                console.error("Error fetching product:", error);
            });
    }, [id]);

    const handleComprar = () => {
        let obj = {
            productId: id,
            quantitySold: cantidad,
        };

        fetch("https://examen-v2-2.vercel.app/api/add-sale", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj), // data es el objeto que estás enviando
        })
            .then((response) => response.json())
            .then((data) => {
                alert(data.message);
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    const renderRating = (rating) => {
        const fullStars = Math.floor(rating);
        const emptyStars = 5 - fullStars;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <span key={`full-${i}`} className="text-warning">
                    &#9733;
                </span>
            );
        }

        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <span key={`empty-${i}`} className="text-secondary">
                    &#9733;
                </span>
            );
        }

        return stars;
    };

    return (
        <div className="">
            <div className="">
                <Busqueda bar={true} />
            </div>
            {/* centrar contenedor con información del producto */}

            <div className="container">
                <div
                    className="product-card text-center p-4 border rounded shadow"
                    style={{ maxWidth: "300px" }}
                >
                    <img
                        src={product.thumbnail}
                        alt="Product Image"
                        className="product-image me-3 w-50"
                    />
                    <h5 className="mb-0">{product.title}</h5>
                    <small className="text-muted">{product.category}</small>
                    <p
                        className="text-muted mt-2"
                        style={{ fontSize: "0.9em" }}
                    >
                        {product.description}
                    </p>
                    <h4
                        className="text-dark mb-2"
                        style={{ fontWeight: "bold" }}
                    >
                        ${product.price}
                    </h4>
                    <div className="rating">{renderRating(product.rating)}</div>

                    <div className="d-flex gap-3">
                        <input
                            type="number"
                            name="cantidad"
                            id="cantidad"
                            className="form-control"
                            min={1}
                            max={product.stock}
                            value={cantidad}
                            onInput={(e) => setCantidad(e.target.value)}
                        />
                        <button
                            onClick={handleComprar}
                            className="btn btn-primary"
                        >
                            Comprar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
