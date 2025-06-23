import { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";

const Navbar = () => {
  const { user, logOutUser } = use(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/" className="font-medium text-sm text-primary">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/availableFoods" className="font-medium text-sm text-primary">
          Available Foods
        </NavLink>
      </li>
      <li>
        <NavLink to="/addFood" className="font-medium text-sm text-primary">
          Add Food
        </NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    logOutUser()
      .then(() => {
        console.log("user Logged out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(user);

  return (
    <div className="navbar border-b border-[#E5E8EB] bg-[#141A1F] px-2 md:px-5 lg:px-10 py-3 ">
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
        <a className="text-xl">Share & Care</a>
      </div>

      <div className="navbar-end">
        {/* <ul className="menu menu-horizontal px-1 ">{links}</ul> */}
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
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
