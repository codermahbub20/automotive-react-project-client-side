import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
// zhgNBjQxnBJ69fRJ

const Registration = () => {

    const { createUser } = useContext(AuthContext)

    const handleRegistration = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                console.log(result)
                const user = {  email,name }

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
                            <div className="form-control   w-full">
                                <input className='btn mt-3 w-full mx-auto  hover:bg-[#56c5bb] bg-[#56c5bb]' type="submit" value="Registration" />
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Registration;