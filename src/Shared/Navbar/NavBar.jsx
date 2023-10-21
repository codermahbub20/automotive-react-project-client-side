import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

import { BsCloudSun, BsMoonFill } from "react-icons/bs";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const handleLogout = () => {
    logOut()
      .then(res => {
        console.log("Logged out", res);
      })
      .catch(err => {
        console.log("Error logging out", err);
      });
  };

  const navLinks = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/addproduct">Add Product</NavLink></li>
      <li><NavLink to="/addCart">My Cart</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="/registration">Registration</NavLink></li>
    </>
  );

  return (
    <div className="navbar text-white bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm text-xl font-neon text-black dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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
        {user ? (
          <>
            <p className="text-red-400 p-1">{user.displayName}</p>
            <img className="rounded-full w-12 mr-4" src={user.photoURL} alt="" />
            <button onClick={handleLogout} className="btn  bg-black btn-accent text-white">Log Out</button>
          </>
        ) : (
          <NavLink to="/login"><button className="btn btn-secondary text-white">Login</button></NavLink>
        )}
      </div>
      <div className="flex-none">
        {/* Toggle button here */}
        <button className="btn btn-square btn-ghost">
          <label className="swap swap-rotate w-12 h-12">
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={theme === "light" ? false : true}
            />
            <div className="w-8 h-8 swap-on">
              <BsCloudSun />
            </div>
            <div className="w-8 h-8 swap-off">
              <BsMoonFill />
            </div>
          </label>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
