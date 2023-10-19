import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Featured = () => {
    const [products,setProducts] =useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/featured');
                const data = await response.json();
                setProducts(data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, []);

    return (
        <div>

<h2 className="text-3xl font-bold mt-[180px] mb-12 text-center">Todays Featured Deals</h2>
        <div className="grid md:grid-cols-4 gap-12 border-2 border-blue-800 rounded-lg p-6 ">
            {
                products?.map(product => (
                    <Link to={`/product/${product._id}`} key={product._id} className="text-center border-r shadow-lg transition duration-300 ease-in-out transform hover:bg-white hover:scale-105 pt-4">
                        <p className="text-[#999999] mb-4">{product.category}</p>
                        <h2 className="mb-8 font-bold">{product.name}</h2>
                        <img src={product.image} className="mx-auto h-24" alt="" />
                        <div className="flex gap-6 justify-center text-semibold mt-4">
                            <h2 className="text-xl font-bold text-[#ef262c] pb-4">${product.price}</h2>
                            <div className="rating">
                                <input type="radio"  className="mask w-4 mask-star-2 bg-orange-400" />
                                <input type="radio" name={product.rating} className="mask w-4 mask-star-2 bg-orange-400" />
                                <input type="radio" name={product.rating} className="mask w-4 mask-star-2 bg-orange-400" />
                                <input type="radio" name={product.rating} className="mask w-4 mask-star-2 bg-orange-400" />
                                <input type="radio" name={product.rating} className="mask w-4 mask-star-2 bg-orange-400" />
                            </div>
                        </div>

                    </Link>
                ))
            }

        </div>
        </div>
    );
};

export default Featured;