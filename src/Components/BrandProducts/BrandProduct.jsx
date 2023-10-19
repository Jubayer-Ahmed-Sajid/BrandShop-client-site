import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const BrandProduct = ({product}) => {
    const {_id,image,brand_name,name,rating,price,category}=product
    return (
        <div className="card  transition duration-300 ease-in-out transform hover:bg-white hover:scale-105">
            <div to={`/product/${product._id}`} className="text-center border-r shadow-lg transition duration-300 ease-in-out transform hover:bg-white hover:scale-105 pt-4">
                        <p className="text-[#999999] mb-4">{category}</p>
                        <h2 className="mb-8 font-bold">{name}</h2>
                        <img src={image} className="mx-auto h-24" alt="" />
                        <div className="flex gap-6 justify-center text-semibold mt-4">
                            <h2 className="text-xl font-bold text-[#ef262c] pb-4">${price}</h2>
                            <div className="rating">
                                <input type="radio"  className="mask w-4 mask-star-2 bg-orange-400" />
                                <input type="radio" name={rating} className="mask w-4 mask-star-2 bg-orange-400" />
                                <input type="radio" name={rating} className="mask w-4 mask-star-2 bg-orange-400" />
                                <input type="radio" name={rating} className="mask w-4 mask-star-2 bg-orange-400" />
                                <input type="radio" name={rating} className="mask w-4 mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    <div className="flex justify-center gap-6 mt-4 mb-4">
                        <Link to={`/product/${product._id}`} className="btn btn-primary">Details</Link>
                        <Link to={`/product/${name}/${_id}`}>
                        <button className="btn btn-primary">Update</button>
                        </Link>
                    </div>

                    </div>
            </div>
    );
};
BrandProduct.propTypes ={
    product: PropTypes.object
}

export default BrandProduct;