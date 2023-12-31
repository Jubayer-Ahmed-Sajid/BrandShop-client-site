import {  useLoaderData } from "react-router-dom";
import {BsCart2} from 'react-icons/bs'
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
const Product = () => {
    const {user} = useContext(AuthContext) 
    const {email} = user;
    const product = useLoaderData()
    const { image, name, brand_name, type, price, description, rating } = product
    const productToInsert = {
        image,name,brand_name,type,price,description,rating,email
    }
    const handleAddToCart= () =>{
        fetch('https://assignment-10-server-eight-theta.vercel.app/cart',{
            method:"POST",
            headers :{
                'content-type': 'application/json'
            },
            body: JSON.stringify(productToInsert)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        Swal.fire(
            'Added!',
            'Your item has been Added to Cart.',
            'success'
        )

    }
    return (
        <div className="grid md:grid-cols-2 gap-4 mt-12">
            <div className="bg-white flex items-center px-4 pb-8 border-r min-h-screen shadow-lg">
                <img src={image} className="min-h-max " alt="" />
            </div>
            <div className='bg-white px-8 pb-8 border-r shadow-lg'>
                <p className="bg-[#f4faf6] bg-contain px-4 py-2 w-24 rounded-md text-[#39b54a] font-bold text-md">In Stock</p>
                <h2 className="mt-4 text-2xl font-bold">{name}</h2>
                <p className="text-[#999999] mt-4">Brand: <span className="font-bold text-black">{brand_name}</span> </p>
                <h2 className="mt-8 text-[#ef262c] text-3xl font-bold">${price}</h2>
                <div className="rating mt-4">
                    <input type="radio" className="mask w-4 mask-star-2 bg-orange-400" />
                    <input type="radio" name={rating} className="mask w-4 mask-star-2 bg-orange-400" />
                    <input type="radio" name={rating} className="mask w-4 mask-star-2 bg-orange-400" />
                    <input type="radio" name={rating} className="mask w-4 mask-star-2 bg-orange-400" />
                    <input type="radio" name={rating} className="mask w-4 mask-star-2 bg-orange-400" />
                </div>
                <p className="mt-10 text-[#999999]">{description}</p>
                <div className="mt-16 mb-4 border rounded-md shadow-md">
                    <button onClick={handleAddToCart} className="btn btn-primary w-full font-bold"><h2 className="text-2xl font-extrabold"><BsCart2></BsCart2> </h2> Add to Cart</button>
                </div>
                <p className="text-[#999999] mt-4">Category: <span className="font-semibold p-2 text-md text-black">{type}</span> </p>

            </div>
        </div>
    );
};

export default Product;