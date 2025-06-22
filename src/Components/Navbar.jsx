import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/" className='font-medium text-sm text-primary'>Home</NavLink>
      </li>
      <li>
        <NavLink to="/addFood" className='font-medium text-sm text-primary'>Add Food</NavLink>
      </li>
      
    </>
  );
  return (
    <div className="navbar border-b border-[#E5E8EB] px-10 py-3 sticky">
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
      <div className="navbar-end gap-3">
        <ul className="menu menu-horizontal px-1 ">{links}</ul>
        <Link to='/login' className="btn bg-[#DBE8F2] text-secondary rounded-xl font-bold text-sm">Login</Link>
        <Link to='/signup' className="btn bg-[#2B3640] text-primary rounded-xl font-bold text-sm">Sign Up</Link>
      </div>
    </div>
  );
};

export default Navbar;
