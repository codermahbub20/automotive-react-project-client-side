import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.config";
const auth = getAuth(app)

const Login = () => {
    const provider = new GoogleAuthProvider();
    const {logIn} = useContext(AuthContext)

    const handleLogIn = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email,password)
        .then(result =>{
            console.log(result)
        })
        .catch(error =>{
            console.log(error)
        })
        console.log(email,password)
    }

    const handleGoogleLogin = () =>{
        signInWithPopup(auth,provider)
        .then(result =>{
            const user = result.user;
            console.log(user)
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
                <form onSubmit={handleLogIn} className="card-body">
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
                            <button onClick={handleGoogleLogin} className="btn  text-xl"><FcGoogle className="h-10 w-6"></FcGoogle>Google</button>
                            </div>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-success text-xl font-neon " type="submit" value="Log In" />
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Login;