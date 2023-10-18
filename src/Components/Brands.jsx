import { useEffect, useState } from "react";
import Brand from "./Brand";

const Brands = () => {
    const [brands,setBrands] = useState([])
    useEffect(()=>{
        fetch('./brands.json')
        .then(res =>res.json())
        .then(data => {
            setBrands(data)
        })
        console.log(brands)
    },[])
    return (
        <div>
            <div className="flex items-center justify-between bg-white p-4">
                {
                    brands?.map(brand => <Brand key={brand.id} brand={brand}></Brand>)

                }

            </div>
        </div>
    );
};

export default Brands;