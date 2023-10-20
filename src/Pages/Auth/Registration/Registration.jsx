import { useContext, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa'
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import { updateProfile } from "firebase/auth";
import auth from "../../../firebase.config";


const Registration = () => {
    const {createUser, signUpWithGoogle}= useContext(AuthContext)
    const navigate = useNavigate('');
    const [errors, setError] = useState('');
    const [successMessage, setSuccess] = useState('');

    const handleRegistration = e => {

        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const url = form.url.value;
        const password = form.password.value;
        if (password.length < 6) {
            return  Swal.fire({
                  position: 'top-end',
                  icon: 'error',
                  title: 'Password must be atleast six character long',
                  showConfirmButton: false,
                  timer: 1500
                })
      }
      if (!/[A-Z]/.test(password)) {
             return Swal.fire({
                  position: 'top-end',
                  icon: 'error',
                  title:"Password must contain at least one capital letter.",
                  showConfirmButton: false,
                  timer: 1500
                })
          
      }
      if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\]/.test(password)) {
             return Swal.fire({
                  position: 'top-end',
                  icon: 'error',
                  title: "Password must contain at least one special character.",
                  showConfirmButton: false,
                  timer: 1500
                })
      }
  
  

        createUser(email, password, url, name)
        .then(() => {
            const user = auth.currentUser;
            updateProfile(user, {
                displayName: name,
                photoURL: url
            })
                .then(() => {

                })
                .catch((error) => {
                    console.error(error)
                })
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Successfully account created',
                showConfirmButton: false,
                timer: 1500
            })
            ;
            setTimeout(() => {
                window.location.reload();
            }, 2000);
           
            navigate('/');
            



        })
        .catch((error) => {
            setError(error.message)
           return Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: errors,
                showConfirmButton: false,
                timer: 1500
            })
        })

    }
    const handleGoogleSignUp = ()=>{
        signUpWithGoogle()
        .then(() =>{
            setSuccess('User created successfully')
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: successMessage,
                showConfirmButton: false,
                timer: 2500
            })
            navigate('/');
        })
        .catch((error) =>{
            setError(error.message)
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: errors,
                showConfirmButton: false,
                timer: 2500
            })
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleRegistration}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" name="url" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <hr className="my-4" />
                    <button className="text-2xl text-center mx-auto " onClick={handleGoogleSignUp}>
                            <FaGoogle></FaGoogle>
                        </button>
                       
                        <Link to='/login'>
                            <h2>Already have an account? <span className="text">Login</span></h2>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;