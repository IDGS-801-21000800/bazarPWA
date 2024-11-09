/* eslint-disable react/prop-types */
const Product = ({ product }) => {
    // Función para renderizar las estrellas basadas en la calificación
    const renderRating = (rating) => {
        const fullStars = Math.floor(rating);
        const emptyStars = 5 - fullStars;
        const stars = [];

        // Añadir estrellas completas
        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <span key={`full-${i}`} className="star">
                    &#9733;
                </span>
            );
        }

        // Añadir estrellas vacías
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <span key={`empty-${i}`} className="star empty">
                    &#9733;
                </span>
            );
        }

        return stars;
    };

    return (
        <a href={`/item/${product.id}`} className="container my-4">
            <div
                className="product-card d-flex align-items-center border p-3 rounded"
                style={{ maxWidth: "400px" }}
            >
                <img
                    src={product.thumbnail}
                    alt="Product Image"
                    className="product-image me-3"
                    style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        objectFit: "cover",
                    }}
                />
                <div>
                    <h5 className="mb-0">
                        {product.title}{" "}
                        <small className="text-muted">{product.category}</small>
                    </h5>
                    <p className="text-muted mb-1">{product.description}</p>
                    <h4 className="text-primary">${product.price}</h4>
                    <div className="rating">{renderRating(product.rating)}</div>
                </div>
            </div>
        </a>
    );
};

export default Product;
