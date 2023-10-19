import { useLoaderData } from "react-router-dom";

const Product = () => {
    const product = useLoaderData('')
    console.log(product)

    return (
        <div>
            <h2>Product{product.name}</h2>
        </div>
    );
};

export default Product;