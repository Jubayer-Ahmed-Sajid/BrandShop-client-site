import { useLoaderData } from "react-router-dom";
import BrandProduct from "./BrandProduct";
import Carousol from "./Carousol";


const BrandProducts = () => {
    // const poructs = useLoaderData()
    const products = useLoaderData()
    return (
        <div>
            <div>
                <Carousol></Carousol>
            </div>

        <div className="grid md:grid-cols-4 gap-4 my-12 border-2 border-blue-800 rounded-lg  ">
           {
            products?.map(product => <BrandProduct key={product._id} product={product}></BrandProduct>)
           }
        </div>
        </div>
    );
};

export default BrandProducts;