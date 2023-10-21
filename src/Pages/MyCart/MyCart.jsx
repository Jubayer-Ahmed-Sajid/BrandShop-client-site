import { useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const MyCart = () => {
    const {user, loading } = useContext(AuthContext)
    const [carts ,setCartProduct] =useState(useLoaderData())
    const myCarts = carts.filter(myCart => myCart.email == user.email)
    console.log(myCarts)
    

    if (loading) {
        return <span className="loading loading-spinner text-error"></span>
    }
    const handleDelete = (id) => {
        fetch(`https://assignment-10-server-eight-theta.vercel.app/cart/${user.email}/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                const remaining = carts.filter(cart => cart._id !== id)
                setCartProduct(remaining)
                console.log(data)
            })
            Swal.fire(
                'Deleted!',
                'Your item has been deleted.',
                'success'
            )

    }



    return (
        <div className="grid md:grid-cols-3 gap-6 border-2 my-12 p-8 border-blue-800 rounded-lg">
          { carts.length ==0 ? (
            <div className="col-span-4 md:min-h-[200px]  flex items-center justify-center font-bold text-3xl">
              <h2>You do not have any product in the cart</h2>
            </div>
          ) : (
            myCarts.map((cartProduct) => (
              <div key={cartProduct._id} className="card transition shadow-md p-4 duration-300 ease-in-out transform hover:bg-white hover:scale-105 flex justify-between">
                <p className="text-[#999999] mb-4 font-bold text-xl">{cartProduct.type}</p>
                <h2 className="mb-8 font-bold">{cartProduct.name}</h2>
                <img src={cartProduct.image} className="mx-auto h-24" alt="" />
                <p className="font-bold text-xl pt-4">{cartProduct.brand_name}</p>
                <div className="flex justify-between text-semibold mt-4">
                  <h2 className="text-xl font-bold text-[#ef262c] pb-4">${cartProduct.price}</h2>
                  <div className="rating">
                    <input type="radio" className="mask w-4 mask-star-2 bg-orange-400" />
                    <input type="radio" name='rating' className="mask w-4 mask-star-2 bg-orange-400" />
                    <input type="radio" name='rating' className="mask w-4 mask-star-2 bg-orange-400" />
                    <input type="radio" name='rating' className="mask w-4 mask-star-2 bg-orange-400" />
                    <input type="radio" name='rating' className="mask w-4 mask-star-2 bg-orange-400" />
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <button onClick={()=>handleDelete(cartProduct._id)} className="btn btn-primary w-full">
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      );
            }
            
    export default MyCart