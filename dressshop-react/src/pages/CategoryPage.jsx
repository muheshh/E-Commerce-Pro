// import { useParams } from "react-router-dom";
// import Beachwear from "../Fea Cat pages/Beachwear";
// // import "./Beachwear.css";

// const CategoryPage = () => {

//     const { category } = useParams();

//     return (

//         <div>

//             {/* Filter Section */}
//             <Beachwear/>

//             {/* Category Name */}
//             <div
//                 style={{
//                     textAlign: "center",
//                     marginTop: "30px"
//                 }}
//             >
//                 {/* <h2
//                     style={{
//                         fontSize: "32px",
//                         textTransform: "capitalize"
//                     }}
//                 >
//                     {category.replaceAll("-", " ")}
//                 </h2>

//                 <p
//                     style={{
//                         color: "#666"
//                     }}
//                 >
//                     Explore our latest collection
//                 </p> */}
//             </div>

//             {/* Products Section */}
//             <div
//                 className="products-container"
//             >

//                 {/* Products will come here */}

//             </div>

//         </div>

//     );

// };

// export default CategoryPage;

import { useParams } from "react-router-dom";
import products from "../data/products.json";

import OnlineExclusive from "../Fea Cat pages/OnlineExclusive";
import NewArrivals from "../Fea Cat pages/NewArrivals";
import Maternity from "../Fea Cat pages/Maternity";
import Dresses from "../Fea Cat pages/Dresses";
import CoOrds from "../Fea Cat pages/CoOrds";  
import clasicones from "../Fea Cat pages/clasicones";
import BestSellers from "../Fea Cat pages/BestSellers";
import Beachwear from "../Fea Cat pages/Beachwear";

const CategoryPage = () => {

    const { category } = useParams();

    const categoryComponents = {

        "online-exclusive": <OnlineExclusive />,

        "new-arrivals": <NewArrivals />,

        "maternity": <Maternity />,

        "dresses": <Dresses />,

        "CoOrds": <CoOrds />,

        "clasicones": <clasicones />,   
        
        "best-sellers": <BestSellers />,

        "beachwear": <Beachwear />,

    };

    return (
        <>
            {categoryComponents[category] || (
                <h1>Category Not Found</h1>
            )}
        </>
    );
};

export default CategoryPage;