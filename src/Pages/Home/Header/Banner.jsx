import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/KK9y0ym/c-d-x-PDX-a-82obo-unsplash-1.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-2xl md:text-5xl font-bold">Discover the Latest in <span className="text-accent">Tech at Your Fingertips!</span> </h1>
                    <p className="mb-5">Explore Cutting-Edge Gadgets and Gizmos at Unbeatable Prices.Upgrade Your Digital Lifestyle with Our Latest Tech Collection</p>
                    <Link to='/login'>
                    <button className="btn btn-primary">Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;