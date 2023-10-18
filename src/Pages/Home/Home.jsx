import Brands from "../../Components/Brands";
import Featured from "../../Components/Featured";
import Banner from "./Header/Banner";

const Home = () => {
    return (
        <div>
            <h2>This is home</h2>
            <div className="relative">
            <Banner></Banner>
           <div className="absolute -bottom-36 w-[90%] mx-[5%]">
           <Brands></Brands>
           </div>
            </div>
            <Featured></Featured>
            
        </div>
    );
};

export default Home;