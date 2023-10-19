
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addproduct">Add Product</NavLink></li>
        <li><NavLink to="/updateproduct">Update Product</NavLink></li>
        <li><NavLink to="/applied">Add Cart</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/registration">Registration</NavLink></li>
    </>

    const handleLogout = () => {
        logOut()
            .then(res => {
                console.log(res)
            })
            .catch(console.error())
    }

    return (
        <div className="navbar bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm text-xl font-neon text-white dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <img className="w-32 h-10" src="https://carspot.scriptsbundle.com/transparent-sidbar/wp-content/uploads/sites/29/2018/04/logo-1.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu text-xl text-white font-neon menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                    <img className="rounded-full w-14 mr-4" src={user.photoURL} alt="" />
                        <button onClick={handleLogout} className="btn  bg-black btn-accent text-white">Log Out</button>
                    </>
                        :
                        <NavLink to="/login"><button className="btn btn-secondary text-white">Login</button></NavLink>
                }
            </div>
        </div>
    );
};

export default NavBar;