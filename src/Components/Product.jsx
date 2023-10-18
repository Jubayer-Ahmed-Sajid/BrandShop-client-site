import { useLoaderData } from "react-router-dom";

const Product = () => {
    const product = useLoaderData()

    return (
        <div>
            <h2>{product.name}</h2>
        </div>
    );
};

export default Product;