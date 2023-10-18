import Swal from "sweetalert2";
const AddProduct = () => {
    const handleAdd =(e)=>{
        e.preventDefault()
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const product = {image,name,type,price,description,rating}
        fetch('http://localhost:5000/addedProducts',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(product)
        })
        .then(res => res.json)
        .then(data => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Product added successfully',
                showConfirmButton: false,
                timer: 2500
            })
        })
    }
    return (
        <div>
            <h2 className="text-center text-3xl my-8">Add Product</h2>

            <form onSubmit={handleAdd}>

                <div className="flex w-full gap-4 px-8">
                    
                    
                </div>
                <div className="flex w-full gap-4 px-8">
                    <div className="w-full">

                        <label className="label mb-2">Brand Name</label>
                        <input type="text" name="name" placeholder="Enter your image link" className="input input-bordered input-primary w-full " />
                    </div>
                    <div className=" w-full">

                        <label className="label mb-2">Type</label>
                        <input type="text" name="type" placeholder="Enter your image link" className="input input-bordered input-primary w-full " />
                    </div>
                </div>
                <div className="flex w-full gap-4 px-8">
                    <div className="w-full">

                        <label className="label mb-2">Price</label>
                        <input type="text" name="price" placeholder="Enter your image link" className="input input-bordered input-primary w-full " />
                    </div>
                    <div className=" w-full">

                        <label className="label mb-2">Short description</label>
                        <input type="text" name="description" placeholder="Enter your image link" className="input input-bordered input-primary w-full " />
                    </div>
                </div>
                <div className="flex w-full gap-4 px-8">
                    <div className="w-full">

                        <label className="label mb-2">Rating</label>
                        <input type="text" name="rating" placeholder="Enter your image link" className="input input-bordered input-primary w-full " />
                    </div>
                    <div className="w-full">

                        <label className="label mb-2">Image</label>
                        <input type="url" name="image" placeholder="Enter your image link" className="input input-bordered input-primary w-full " />
                    </div>
                </div>
                <input type="submit" className="btn btn-primary w-full my-4" value='Add Product' name="" id="" />
            </form>
        </div>
    );
};

export default AddProduct;