import { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/Network";
import { Slide } from "react-awesome-reveal";

const Navbar = () => {
  const { user, signOutUser, form2Data } = useContext(AuthContext);
  const [userDataToShowOnNavbar, setUserDataToShowOnNavbar] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    if (user) {
      setUserDataToShowOnNavbar({
        photo: user.photoURL,
        name: user.displayName,
        email: user.email,
      });
    }
  }, [user]);

  function handleSignOut() {
    signOutUser()
      .then(() => console.log("Signed out successfully."))
      .catch((error) => console.error("Sign out error:", error));
  }

  // ✅ Only show Add Visa & My Added Visas for this admin user
  const isAdmin = user?.email === "nehal.sunderland@gmail.com";

  return (
    <div className="rounded-lg shadow-lg my-6 w-full text-white py-2 sticky top-0 z-20 text-5xl bg-blue-600">
      <div className="navbar bg-blue-600">
        {/* ========== LEFT (Logo + Mobile Dropdown) ========== */}
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {/* ✅ Mobile Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-red-700"
            >
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/all-visas">All Visas</NavLink></li>

              {/* Only visible for admin */}
              {isAdmin ? (
                <>
                  <li><NavLink to="/add-visa">Add Visa / Add Interest</NavLink></li>
                  <li><NavLink to="/my-added-visas">My Added Visas / Interests</NavLink></li>
                </>
              ) : null}

              <li><NavLink to="/about-us">About Us</NavLink></li>
              <li><NavLink to="/support">Support</NavLink></li>
            </ul>
          </div>

          {/* Logo */}
          <a className="btn btn-ghost text-xl">
            <img className="w-14 h-14 border-8 rounded-full" src="/logo.png" alt="Logo" />
          </a>
        </div>

        {/* ========== CENTER (Desktop Menu) ========== */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Slide duration={3000}>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/all-visas">All Visas</NavLink></li>
              <li><NavLink to="/about-us">About Us</NavLink></li>
              <li><NavLink to="/support">Support</NavLink></li>
            </Slide>

            {/* ✅ Only for Admin (moved conditional outside <Slide> to fix “false” bug) */}
            {isAdmin && (
              <Slide direction="right" duration={3000}>
                <li><NavLink to="/add-visa">Add Visa</NavLink></li>
                <li><NavLink to="/my-added-visas">My Added Visas</NavLink></li>
              </Slide>
            )}
          </ul>
        </div>

        {/* ========== RIGHT (User Info / Login Buttons) ========== */}
        <div className="navbar-end">
          {user ? (
            <div
              className="relative flex items-center"
              onMouseEnter={() => setIsDropdownVisible(true)}
              onMouseLeave={() => setIsDropdownVisible(false)}
            >
              <img
                className="h-10 w-10 border-2 rounded-full bg-slate-400 cursor-pointer"
                src={userDataToShowOnNavbar?.photo || form2Data?.photoUrl}
                alt="User"
              />

              {isDropdownVisible && (
                <div className="absolute top-10 right-0 w-48 bg-white border shadow-lg rounded-md p-2">
                  <p className="text-sm font-semibold text-purple-500">
                    {userDataToShowOnNavbar?.name || form2Data?.name}
                  </p>
                  <button
                    className="btn bg-violet-500 text-white mt-2 w-full"
                    onClick={handleSignOut}
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-2">
              <li className="btn bg-violet-500 text-white">
                <NavLink to="/login">Login</NavLink>
              </li>
              <li className="btn bg-violet-500 text-white">
                <NavLink to="/register">Register</NavLink>
              </li>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
