import { useEffect, useState } from "react";

const Featured = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/featured')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    },[])
    console.log(products)

    return (
        <div className="grid grid-cols-6  mt-[200px]">
            {
              products?.map(product => (
                <div key={product._id} className="">
                    <img src={product.image}  className="h-20" alt="" />
                    <h2>{product.name}</h2>

                </div>
              ))
            }
            
        </div>
    );
};

export default Featured;