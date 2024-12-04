
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Form,Outlet,useLoaderData  } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../providers/Network";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ReactTyped } from 'react-typed';



const MainLayout = () => {
 

    const { user} = useContext(AuthContext);




    return ( <div className="w-full px-4 bg-sky-200 ">
            <ToastContainer
  position="top-right"
  autoClose={3000} // Closes after 3 seconds
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
/>



          <div className="text-center text-4xl my-6 font-extrabold">
        {user ? (
          <div >Welcome !! {user?.displayName || "User"}</div>
        ) : 
        
        
        (
          <ReactTyped
          strings={[
            "<span class='text-purple-500'>Welcome to global VISA Portal!</span>",
            "<span class='text-purple-600'>A guided VISA Portal</span>",
          ]}
          typeSpeed={100} 
          backSpeed={50} 
          backDelay={1000} 
          startDelay={500} 
          loop={false} 
        />
        )}



      </div>
    <div className="">    <Navbar></Navbar></div>
  <div className=" ">
  <Outlet></Outlet>
  </div>
      <div className="">  <Footer></Footer></div>




    </div> );
}
 
export default MainLayout;