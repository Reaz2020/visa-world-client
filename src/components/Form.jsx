



import { useContext } from "react";
import { AuthContext } from "../providers/Network";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Form = () => {
  const [errorMessage, setErrorMessage]=useState('');
 
  const {SignInUser,handleGoogleSignIn} = useContext(AuthContext);
 
    const navigate = useNavigate();
    const handleNavigate=()=>{navigate('/') 

    }
// submitting login and redirecting to home page is successfull 
    const handelSubmit=(e)=>{
        e.preventDefault();

       let  email=e.target.email.value;
       let  password=e.target.password.value;

       SignInUser(email,password).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        handleNavigate()
        // ...
      })
      .catch((error) => {
 
        const errorMsg = error.message;
        setErrorMessage(errorMsg)
      });
    

    
    }
    function  handleNavigateToRegister(){navigate('/register') 

    }

    // this will submit a login through google and redirecting after successful login 
    function handleGoogleSignInLocally(){
      handleGoogleSignIn().then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        handleNavigate()
      }).catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    }
   
    return ( 
    <div className="container mx-auto border-2">
        <div className="text-center ">
           <button className="border-2 bg-lime-400 hover:bg-lime-600 w-32 rounded-full p-4" onClick={handleNavigate}>to home pg</button>
           <button className="border-2 bg-lime-400 hover:bg-lime-600 w-32 rounded-full p-4" onClick={handleNavigateToRegister}>register</button>
          
        </div>

<form className="w-1/2 container mx-auto flex flex-col  my-2 gap-2" onSubmit={handelSubmit}>



<label>
  Email
  <input name="email" placeholder="email" type="text" className="border-2  w-full" />
</label>

<label>
  Password
  <input name="password" placeholder="password" type="password" className="border-2  w-full" />
</label>


<p className="text-red-600 text-lg">{errorMessage}</p>
{/* <input className="btn" type="submit" /> */}
<button className="btn btn-primary w-full"  type="submit">Login</button>

</form>
<div ><button className="btn btn-primary w-full" onClick={handleGoogleSignInLocally}>Log in with google</button></div>
{/* <div ><button className="btn btn-primary w-full" onClick={handleGitSignIn}>Log in with github</button></div> */}



    </div> 
    

);
}
 
export default Form;