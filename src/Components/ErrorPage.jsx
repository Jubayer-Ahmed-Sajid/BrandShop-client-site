import {TbError404} from 'react-icons/tb'
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className="bg-yellow-400 md:p-12 p-6 md:max-h-screen ">
           <div className='md:flex justify-center items-center'>
           <h2 className=' text-8xl text-white'>
                <TbError404></TbError404>
            </h2>
            <h2 className="text-3xl text-center text-white"> Not found!!</h2>
            
           </div>
           <Link to='/' className='flex justify-center'>
            <button className='btn text-primary bg-secondary'>Go to Home</button>
           </Link>
        </div>
    );
};

export default ErrorPage;