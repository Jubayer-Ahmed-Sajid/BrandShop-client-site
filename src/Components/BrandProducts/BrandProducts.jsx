import { useLoaderData, useParams } from "react-router-dom";
import BrandProduct from "./BrandProduct";


const BrandProducts = () => {
    // const poructs = useLoaderData()
    const products = useLoaderData()
    const name = useParams()
    console.log(products,name)
    return (
        <div className="grid md:grid-cols-4 gap-12 border-2 border-blue-800 rounded-lg  ">
           {
            products?.map(product => <BrandProduct key={product._id} product={product}></BrandProduct>)
           }
        </div>
    );
};

export default BrandProducts;