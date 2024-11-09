import { BrowserRouter, Route, Routes } from "react-router-dom";
import Busqueda from "./components/bazar/Busqueda";
import Products from "./components/bazar/Products";
import ProductDetails from "./components/bazar/ProductDetails";
import Sales from "./components/bazar/Sales";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Busqueda />} />
                <Route path="/items" element={<Products />} />
                {/* liga para product details con id */}
                <Route path="/item/:id" element={<ProductDetails />} />
                <Route path="/sales" element={<Sales />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
