import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProducts = () => {
    const id = useParams();
    const loadedProduct = useLoaderData()
    const { image, name,brand_name, type, price, description, rating } = loadedProduct
    console.log(id)
    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const brand_name = form.brand_name.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const product = { image, name,brand_name, type, price, description, rating }
        fetch(`http://localhost:5000/addedProducts/${loadedProduct.brand_name}/${loadedProduct._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json)
            .then((data) => {
                console.log(data.deletedCount)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Product updated successfully',
                    showConfirmButton: true,
                    timer: 2500
                })
            })
    }
    return (
        <div>
            <h2 className="text-center text-3xl my-8">Add Product</h2>

            <form onSubmit={handleUpdate}>

                <div className="flex w-full gap-4 px-8">


                </div>
                <div className="flex w-full gap-4 px-8">
                    <div className="w-full">

                        <label className="label mb-2">Brand Name</label>
                        <input required type="text" defaultValue={brand_name} name="brand_name" placeholder="Enter Brand Name" className="input input-bordered input-primary w-full " />
                    </div>
                    <div className=" w-full">

                        <label className="label mb-2">Name</label>
                        <input required type="text" defaultValue={name} name="name" placeholder="Name" className="input input-bordered input-primary w-full " />
                    </div>
                </div>
                <div className="flex w-full gap-4 px-8">

                    <div className="w-full">

                        <label className="label mb-2">Type</label>
                        <input required type="text" defaultValue={type} name="type" placeholder="Type" className="input input-bordered input-primary w-full " />
                    </div>
                    <div className="w-full">

                        <label className="label mb-2">Price</label>
                        <input required type="text" defaultValue={price} name="price" placeholder="$price" className="input input-bordered input-primary w-full " />
                    </div>
                </div>
                <div className="flex w-full gap-4 px-8">
                    <div className="w-full">

                        <label className="label mb-2">Rating</label>
                        <input required type="text" defaultValue={rating} name="rating" placeholder="Rating" className="input input-bordered input-primary w-full " />
                    </div>
                    <div className=" w-full">

                        <label className="label mb-2">Short description</label>
                        <input  required type="text" defaultValue={description} name="description" placeholder="Product description" className="input input-bordered input-primary w-full " />
                    </div>
                </div>
                <div className="w-full px-8">

                    <label className="label mb-2">Image</label>
                    <input required type="url" name="image" defaultValue={image} placeholder="Enter your image link" className="input input-bordered input-primary w-full " />
                </div>
                <div className="px-8">
                <input type="submit" className="btn btn-primary w-full my-4" value='Add Product' name="" id="" />
                </div>
            </form>
        </div>
    );
};

export default UpdateProducts;