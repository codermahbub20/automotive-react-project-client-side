import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";



const Login = () => {
    const [loginError, setLogInError] = useState('');

    const location = useLocation()
    const navigate = useNavigate()

    const { logIn } = useContext(AuthContext)

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password)

        logIn(email, password)
            .then(res => {
                console.log(res)

                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                console.log(error)
                setLogInError(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className='min-h-[20vh] bg-center bg-cover' style={{ backgroundImage: `url(https://carspot.scriptsbundle.com/transparent-sidbar/wp-content/uploads/sites/29/2019/01/services-bg.png)` }}>
            </div>
            <div className="w-3/4 mx-auto bg-base-200">
                <div className="lg:w-1/2 p-6 mx-auto">
                    <h1 className="text-center text-3xl mt-2 text-red-600 font-neon font-medium">Log In Now....</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text md:text-xl font-neon">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text md:text-xl font-neon">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                            <label className="label">
                                <a href="#" className="label-text-alt md:text-2xl font-neon link link-hover">Forgot password?</a>
                                <div className="flex">
                                    <button onClick={handleGoogleSignIn} className="btn  text-xl"><FcGoogle className="h-10 w-6"></FcGoogle>Google</button>
                                </div>
                            </label>
                            <p className="text-xl font-neon">First Time You Visit this website please? <a className="text-blue-500" href="/registration">Registration</a> </p>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-success text-xl font-neon " type="submit" value="Log In" />
                        </div>
                    </form>
                    {
                        loginError && <p className="text-xl text-red-400">{loginError}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;