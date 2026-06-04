
import { useState, useEffect } from "react";
import "./AdminPanel.css";

const AdminPanel = () => {

    const [products, setProducts] = useState([]);

    const [formData, setFormData] = useState({
        title: "",
        image: "",
        price: "",
        category: "",
    });

    // Load Products
    useEffect(() => {

        const savedProducts =
            JSON.parse(localStorage.getItem("products")) || [];

        setProducts(savedProducts);

    }, []);

    // Input Change
    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    // Submit Product
    const handleSubmit = (e) => {

        e.preventDefault();

        const updatedProducts = [
            ...products,
            formData,
        ];

        setProducts(updatedProducts);

        localStorage.setItem(
            "products",
            JSON.stringify(updatedProducts)
        );

        // Clear Form
        setFormData({
            title: "",
            image: "",
            price: "",
            category: "",
        });

    };

    return (

        <div className="admin-panel">

            <h1>Admin Product Panel</h1>

            {/* FORM */}
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="title"
                    placeholder="Product Name"
                    value={formData.title}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={formData.image}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    value={formData.price}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleChange}
                />

                <button type="submit">
                    Add Product
                </button>

            </form>

            {/* PRODUCTS */}
            <div className="admin-products">

                {products.map((item, index) => (

                    <div className="admin-card" key={index}>

                        <img
                            src={item.image}
                            alt={item.title}
                        />

                        <h3>{item.title}</h3>

                        <p>{item.price}</p>

                        <span>{item.category}</span>

                    </div>

                ))}

            </div>

        </div>

    );
};

export default AdminPanel;
