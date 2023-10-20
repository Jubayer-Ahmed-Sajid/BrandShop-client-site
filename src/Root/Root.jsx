import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Header/Navbar/Navbar";
import Footer from "../Components/Footer";

const Root = () => {
    return (
        <div>
            <div className="md:max-w-6xl md:mx-auto">

            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Root;