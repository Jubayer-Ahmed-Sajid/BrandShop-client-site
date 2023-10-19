import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Brand = ({ brand }) => {
    const { image, name } = brand
    return (
        <div>
            <Link to={`/brand/${name}`}>
            <div className='card grid grid-rows-2 transition duration-300 ease-in-out transform hover:bg-white hover:scale-105'>
               
                        <img src={image} className='w-24 mx-auto' alt="" />

                    
                <h2 className='text-xl text-center mt-4 font-semibold'>{name}</h2>
            </div>
            </Link>

        </div>

    )
}

Brand.propTypes = {
    brand: PropTypes.object
}

export default Brand
