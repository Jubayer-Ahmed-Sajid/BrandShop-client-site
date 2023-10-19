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
    },[])

    return (
        <div>
            <div className="md:flex justify-around items-center rounded-lg gap-4 bg-white p-4">
                {
                    brands?.map(brand => <Brand key={brand.id} brand={brand}></Brand>)

                }

            </div>
        </div>
    );
};

export default Brands;