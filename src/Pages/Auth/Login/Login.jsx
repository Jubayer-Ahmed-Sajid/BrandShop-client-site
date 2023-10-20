import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {signIn} = useContext(AuthContext)
    const handleSignIn =(e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(()=>{
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Successfully logged in',
                showConfirmButton: false,
                timer: 2500
            })
            navigate(location?.state ? location.state : '/');
        })
        .catch(error =>{
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: error.message,
                showConfirmButton: false,
                timer: 2500
            })
        })

    }
    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content my-6">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSignIn}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <Link to='/registration'>
                            <h2>New to the site? <span className="text">Login</span></h2>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;