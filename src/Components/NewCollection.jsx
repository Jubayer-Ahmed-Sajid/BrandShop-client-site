
const NewCollection = () => {
    return (
        <div className="hero min-h-screen bg-base-200 my-20">
        <div className="hero-content flex-col lg:flex-row-reverse overflow-hidden">
          <img src="https://i.ibb.co/t3H3zYS/modern-stationary-collection-arrangement-min.jpg" className="w-[200px] md:w-[348px]  rounded-lg" />
          <div className="text-center md:text-start" >
            <h1 className="text-xl md:text-2xl font-bold">New Collection</h1>
            <h1 className="text-2xl lg:text-5xl mt-6 font-bold">Up <span  className="text-[#ef262c]">to 30% </span>Off</h1>
            <h2 className="text-4xl font-semibold">Instant Discount</h2>

            <p className="py-4">Applicable on debit card, credit card, net banking.</p>
            <div className="flex items-center justify-center md:justify-start">

            <button className="btn mt-8 btn-primary">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default NewCollection;