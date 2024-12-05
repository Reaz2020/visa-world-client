import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { useEffect ,useState} from "react";
import { AuthContext } from "../providers/Network";
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user ,  signOutUser,handleGoogleSignIn} = useContext(AuthContext);
  const [userDataToShowOnNavbar, setUserDataToShowOnNavbar] = useState(null);




  useEffect(() => {
    if (user) {
     
      setUserDataToShowOnNavbar({
        photo: user.photoURL,
        name: user.displayName,
        email: user.email
      });
    }
  }, [user]);


function handleSignOut(){
  signOutUser().then(() => {
   
  }).catch((error) => {
    
  });

}



    return ( 
    
    <div className="border-2  rounded-lg">
        <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         <li>   <NavLink to='/'> Home</NavLink> </li>
         {/* {user && (
                    <>
                        <li>
                            <NavLink to="/profile">Profile</NavLink>
                        </li>
                       
                    </>
                )} */}
        
        <li>   <NavLink to='/all-visas'> All-visas</NavLink> </li>
        
        <li>   <NavLink to='/tutorial'> Add Visa</NavLink> </li>
        <li>   <NavLink to='/my-added-visas'> My Added Visas</NavLink> </li>
        <li>   <NavLink to='/my-visa-applications'> My Visa Applications</NavLink> </li>
        <li>   <NavLink to='/about-us'> About-us</NavLink> </li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img className="w-14 h-14 border-8  rounded-full" src="/logo.png" alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li>   <NavLink to='/'> Home</NavLink> </li>
    <li>   <NavLink to='/all-visas'> All-Visas</NavLink> </li>
    <li>   <NavLink to='/add-visa'> Add Visa</NavLink> </li>
    <li>   <NavLink to='/about-us'> About-us</NavLink> </li>
    <li>   <NavLink to='/my-added-visas'> My Added Visas</NavLink> </li>
    <li>   <NavLink to='/my-visa-applications'> My Visa Applications</NavLink> </li>

     
    
{/* 
      {user && (
                    <>
                        <li>
                            <NavLink to="/profile">Profile</NavLink>
                        </li>
                       
                    </>
                )} */}
   



   
      {/* <NavLink to={'/login'}> Login or Sign Up</NavLink> */}
    </ul>
  </div>
  <div className="navbar-end">
  { 
  
     user? <li className="list-none"> <div className="flex gap-2 items-center justify-center">
    <img className="h-10 w-10 border-2 rounded-full bg-slate-400" src={userDataToShowOnNavbar?.photo}  alt="" /> 
    <button className="btn  bg-violet-500 text-white" onClick={ handleSignOut}>log out</button></div></li> : 
    <div> <li className="btn bg-violet-500 text-white">   <NavLink to='/login'> Login</NavLink> </li>
     <li className="btn bg-violet-500 text-white">   <NavLink to='/register'> Register</NavLink> </li></div>

 
  
      
    }
     
  </div>
</div>
    </div> );
}
 
export default Navbar;