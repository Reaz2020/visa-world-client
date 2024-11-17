
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/Network";
const Register = () => {


    const { createUser}=useContext(AuthContext);
    // const [user,  SetUser  ]=useState('n');
    const navigate = useNavigate();
    const handleNavigate=()=>{navigate('/') 

    }

    const handelRegister=(e)=>{
        e.preventDefault();
     
       let  email=  e.target.email.value;
       let  password=  e.target.password.value;
     




      createUser(email,password)
      .then(
        result=>{console.log(result.user)}
      )
      .catch(
        error=>{console.log('ERROR',error.message)
  
      });
    
    }

 



    return ( 
        <div className="container mx-auto border-2">
            <div className="text-center ">
               <button className="border-2 bg-lime-400 hover:bg-lime-600 w-32 rounded-full p-4" onClick={handleNavigate}>to home pg</button>
            </div>

    <form className="w-1/2 container mx-auto flex flex-col  my-2 gap-2" onSubmit={handelRegister}>
    
    <label>
      Name
      <input name="name" placeholder="name" type="text" className="border-2 w-full" />
    </label>
    
    <label>
      Email
      <input name="email"  placeholder="email" type="email" className="border-2  w-full" />
    </label>
    
    <label>
      Password
      <input name="password"  placeholder="password" type="password" className="border-2  w-full" />
    </label>
    
    <label>
      About You
      <textarea placeholder="About you" className="border-2  w-full" />
    </label>
    
    <input type="submit" />
    
    </form>
    
    
    
    
    
        </div> 
    
);
}
 
export default Register;