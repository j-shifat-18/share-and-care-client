import { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";
import { SiIfood } from "react-icons/si";
import Loader from "./Loader";

const Navbar = () => {
  const { user, logOutUser , loading } = use(AuthContext);

  if(loading) return <Loader></Loader>;

  const links = (
    <>
      <li>
        <NavLink to="/" className="font-medium text-sm text-primary">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/availableFoods"
          className="font-medium text-sm text-primary"
        >
          Available Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className="font-medium text-sm text-primary"
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink to="/aboutUs" className="font-medium text-sm text-primary">
          About US
        </NavLink>
      </li>
      <li>
        <NavLink to="/contactUs" className="font-medium text-sm text-primary">
          Contact US
        </NavLink>
      </li>
      <li>
        <NavLink to="/addFood" className="font-medium text-sm text-primary">
          Add Food
        </NavLink>
      </li>
      <li>
        <NavLink to="/myRequests" className="font-medium text-sm text-primary">
          My Requests
        </NavLink>
      </li>
      <li>
        <NavLink to="/myFoods" className="font-medium text-sm text-primary">
          My Foods
        </NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    logOutUser()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You are logged out",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // console.log(user);

  return (
    <div className="navbar border-b border-base-100 px-2 md:px-6 lg:px-12 py-3 fixed z-50 top-0 bg-transparent backdrop-blur-3xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <SiIfood size={20} />
          </div>
          <a className="text-xl font-bold">Share & Care</a>
        </div>
      </div>

      {/* <ul className="menu menu-horizontal px-1 ">{links}</ul> */}
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 flex">{links}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <button
            onClick={handleLogout}
            className="btn bg-base-100 text-primary rounded-xl font-bold text-sm"
          >
            Logout
          </button>
        ) : (
          <>
            <div className="flex flex-row gap-3">
              <Link
                to="/login"
                className="btn bg-neutral text-secondary rounded-xl font-bold text-sm"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="btn bg-base-100 text-primary rounded-xl font-bold text-sm"
              >
                Sign Up
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
