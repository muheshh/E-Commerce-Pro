import { useParams } from "react-router-dom";
import products from "../data/products.json";

const Searchbar = () => {

    const { keyword } = useParams();

    const filteredProducts = products.filter((item) =>
        item.title &&
        item.title.toLowerCase().includes(
            keyword.toLowerCase()
        )
    );

    return (

        <div>

            <h1>Search Results for: {keyword}</h1>

            {filteredProducts.length === 0 ? (

                <h2>No Products Found</h2>

            ) : (

                filteredProducts.map((item) => (

                    <div key={item.id}>

                        <h3>{item.title}</h3>

                        <p>₹{item.price}</p>

                    </div>

                ))

            )}

        </div>

    );
};

export default Searchbar;