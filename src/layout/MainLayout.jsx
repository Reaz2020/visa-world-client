
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Form,Outlet,useLoaderData  } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../providers/Network";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MainLayout = () => {


    const { user} = useContext(AuthContext);




    return ( <div>
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
          <div className="text-center text-green-600 text-xl ">
        {user ? (
          <div >Hello! {user?.displayName || "User"}</div>
        ) : (
          <div>Hello! Welcome, Guest</div>
        )}
      </div>
    <div className="container mx-auto">    <Navbar></Navbar></div>
  <div className="min-h-[45rem] container mx-auto">
  <Outlet></Outlet>
  </div>
      <div className="container mx-auto">  <Footer></Footer></div>




    </div> );
}
 
export default MainLayout;