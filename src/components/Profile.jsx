import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/Network";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Profile = () => {
    const { user } = useContext(AuthContext);



    return (
    
        <div> 
          
            <h1>{user?.email}</h1>
        </div>
    );
};

export default Profile;
