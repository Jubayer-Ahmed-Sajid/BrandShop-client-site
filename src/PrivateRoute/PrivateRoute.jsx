import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Login from "../Pages/Auth/Login/Login";

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    if(user){
        return children
    }
    else return <Login></Login>
   
        
};

export default PrivateRoute;