import { useLoaderData, useParams } from "react-router-dom";

const UpdateProducts = () => {
    const id = useParams();
    const product = useLoaderData()
    console.log(product)
    console.log(id)
    return (
        <div>
            <h2>Update{product.name}</h2>
        </div>
    );
};

export default UpdateProducts;