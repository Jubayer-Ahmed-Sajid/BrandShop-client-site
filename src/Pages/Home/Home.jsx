import Brands from "../../Components/Brands";
import Featured from "../../Components/Featured";
import NewCollection from "../../Components/NewCollection";
import Banner from "./Header/Banner";

const Home = () => {
    return (
        <div>
            <div className="md:relative">
            <Banner></Banner>
           <div className="md:absolute -bottom-36 w-[90%] mx-[5%]">
           <Brands></Brands>
           </div>
            </div>
            <Featured></Featured>
            <NewCollection></NewCollection>
            
        </div>
    );
};

export default Home;