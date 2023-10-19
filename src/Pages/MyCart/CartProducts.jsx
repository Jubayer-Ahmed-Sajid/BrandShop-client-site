import PropTypes from 'prop-types'

const CartProducts = ({cartProduct}) => {
    const {_id,image,brand_name,name,rating,price,type}=cartProduct;
  return (
    <div>
      <div className="card  transition duration-300 ease-in-out transform hover:bg-white hover:scale-105">
            <div  className=" border-r px-6 shadow-lg transition duration-300 ease-in-out transform hover:bg-white hover:scale-105 pt-4">
                        <p className="text-[#999999] mb-4 font-bold text-xl">{type}</p>
                        <h2 className="mb-8  font-bold">{name}</h2>
                        <img src={image} className="mx-auto h-24" alt="" />
                        <p className="font-bold text-xl  pt-4">{brand_name}</p>
                        <div className="flex  justify-between text-semibold mt-4">
                            <h2 className="text-xl font-bold text-[#ef262c] pb-4">${price}</h2>
                            <div className="rating">
                                <input type="radio"  className="mask w-4 mask-star-2 bg-orange-400" />
                                <input type="radio" name={rating} className="mask w-4 mask-star-2 bg-orange-400" />
                                <input type="radio" name={rating} className="mask w-4 mask-star-2 bg-orange-400" />
                                <input type="radio" name={rating} className="mask w-4 mask-star-2 bg-orange-400" />
                                <input type="radio" name={rating} className="mask w-4 mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    <div className="flex justify-between gap-6 mt-4 mb-4">
                        <button to={`/products/${name}/${_id}`} className="btn btn-primary">Details</button>
                        
                    </div>

                    </div>
            </div>
    </div>
  )
}

CartProducts.propTypes = {
cartProduct: PropTypes.object
}

export default CartProducts
