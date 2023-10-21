import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";

const Registration = () => {
    const notify = () => toast("Registration Successful!");
    const notify1 = () => toast('Password should be at 6 characters or longer');
    const notify2 = () => toast('your Password should have at one upper case latter');
    const notify3 = () => toast('your Password should have at one special characters');

    const { createUser } = useContext(AuthContext)

    const handleRegistration = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        if(password.length < 6){
            notify1();
            return;
        }else if(!/[A-Z]/.test(password)){
            notify2();
            return;
        }else if(!/^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/.test(password)){
            notify3();
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result)

                updateProfile(result.user,{
                    displayName: name,
                    photoURL: photo
                })
                .then(()=>console.log('Profile Updated'))
                .catch(error =>{
                    console.log(error)
                })
                const user = {  email,name,photo }

                fetch("http://localhost:5000/user", {
                    method: "POST",
                    headers: {
                        'content-types': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
            })
            .catch(error => {
                console.log(error)
            })
            notify()

        console.log(name, email, password)
    }


    return (
        <div>
            <div className='min-h-screen bg-center bg-cover' style={{ backgroundImage: `url(https://carspot.scriptsbundle.com/transparent-sidbar/wp-content/uploads/sites/29/2019/01/services-bg.png)` }}>
                <div className="w-3/4 p-14 rounded-lg  bg-[#F4F3F0] mx-auto">
                    <h1 className="text-3xl font-medium font-neon text-center">Please Registration Now...!</h1>

                    <div className="md:w-1/2 mx-auto">
                        <form onSubmit={handleRegistration}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text md:text-xl font-neon">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" name="name" required />
                            </div>
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
                                <input type="password" placeholder="email" className="input input-bordered" name="password" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text md:text-xl font-neon">Photo URL</span>
                                </label>
                                <input type="text" placeholder="enter your photo url" className="input input-bordered" name="photo" required />
                            </div>
                            <div className="form-control   w-full">
                                <input className='btn mt-3 w-full mx-auto  hover:bg-[#56c5bb] bg-[#56c5bb]' type="submit" value="Registration" />
                            </div>
                            <p className="text-xl font-neon">Already you have an account please ? <a className="text-blue-500" href="/login">Login</a></p>
                        </form>
                    </div>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default Registration;