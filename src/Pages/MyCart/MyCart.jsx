import { useLoaderData } from "react-router-dom";
import CartProducts from "./CartProducts";

const MyCart = () => {
    const cartProducts = useLoaderData();
    return (
        <div className="grid md:grid-cols-4 gap-12 border-2 border-blue-800 rounded-lg  ">
            {
                cartProducts?.map(cartProduct => <CartProducts key={cartProduct._id} cartProduct={cartProduct}></CartProducts>)
            }
        </div>
    );
};

export default MyCart;