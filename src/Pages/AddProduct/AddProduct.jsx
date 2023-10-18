
const AddProduct = () => {
    return (
        <div>
            <h2 className="text-center text-3xl my-8">Add Product</h2>

            <form>

                <div className="flex w-full gap-4 px-8">
                    <div className="w-full">

                        <label className="label mb-2">Image</label>
                        <input type="url" placeholder="Enter your image link" className="input input-bordered input-primary w-full " />
                    </div>
                    <div className=" w-full">

                        <label className="label mb-2">Name</label>
                        <input type="url" placeholder="Enter your image link" className="input input-bordered input-primary w-full " />
                    </div>
                </div>
                <div className="flex w-full gap-4 px-8">
                    <div className="w-full">

                        <label className="label mb-2">Brand Name</label>
                        <input type="url" placeholder="Enter your image link" className="input input-bordered input-primary w-full " />
                    </div>
                    <div className=" w-full">

                        <label className="label mb-2">Type</label>
                        <input type="url" placeholder="Enter your image link" className="input input-bordered input-primary w-full " />
                    </div>
                </div>
                <div className="flex w-full gap-4 px-8">
                    <div className="w-full">

                        <label className="label mb-2">Price</label>
                        <input type="url" placeholder="Enter your image link" className="input input-bordered input-primary w-full " />
                    </div>
                    <div className=" w-full">

                        <label className="label mb-2">Short description</label>
                        <input type="url" placeholder="Enter your image link" className="input input-bordered input-primary w-full " />
                    </div>
                </div>
                <div className="flex w-full gap-4 px-8">
                    <div className="w-full">

                        <label className="label mb-2">Rating</label>
                        <input type="url" placeholder="Enter your image link" className="input input-bordered input-primary w-full " />
                    </div>
                    <div className=" w-full">

                        <label className="label mb-2">Add button</label>
                        <input type="url" placeholder="Enter your image link" className="input input-bordered input-primary w-full " />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;