

import { auth } from '../firebase.config';
import { createContext} from 'react';
import { Form,Outlet,useLoaderData  } from 'react-router-dom';
export const AuthContext = createContext(null);

 import {  onAuthStateChanged,signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword,
  signInWithPopup } from "firebase/auth";

 import { useState } from 'react';
 import { useEffect } from 'react';
 import { GoogleAuthProvider } from "firebase/auth";

 import { updateProfile } from "firebase/auth"; // Firebase import for profile updates






const Network = ({children}) => {
  // const data = useLoaderData(); 

  const [isDarkMode, setIsDarkMode] = useState(false);

// const [userDataOnRegOrUpdate, setUserOnRegOrUpdate] = useState(null);// for temp use 
const [user, setUser]=useState(null);
const [loading, setLoading]=useState(true);
const [swedishData, setSwedishData] = useState(null); // State to store Swedish data
const [form2Data, setForm2Data] = useState({
  name: "",   // Initialize name field
});


const provider = new GoogleAuthProvider();


// fetchi data
  // Fetch data from swedish.json in useEffect
  // Fetch data from swedish.json in useEffect
  useEffect(() => {
    const fetchSwedishData = async () => {
      try {
        const response = await fetch('/swedish.json'); // Replace with actual path
        if (!response.ok) {
          throw new Error("Failed to load data from swedish.json");
        }
        const data = await response.json();
        setSwedishData(data); // Store data in state
      } catch (error) {
        console.error("Error fetching swedish.json:", error);
      }
    };

    fetchSwedishData();
  }, []);


  function createUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
      
  }
  
//sign in
function SignInUser (email,password){
  return  signInWithEmailAndPassword(auth, email, password)

}


//observer 

useEffect(() => {
    // Subscribe to the onAuthStateChanged listener
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {

    
        setUser(currentUser); // Set the user when logged in
        setLoading(false)
     
 
    });

    // Cleanup the listener on component unmount
    return () => unSubscribe();

  },[]); // Empty dependency array ensures this effect onl

function handleGoogleSignIn(){
  return  signInWithPopup(auth, provider)

}




//update 
  // Handle updating user profile (name and photo URL)
  function handleUpdateUser(updatedName, updatedPhotoURL) {
    if (user) {
      return updateProfile(user, { displayName: updatedName, photoURL: updatedPhotoURL })
        
    } else {
      console.warn("No authenticated user to update");
    }
  }




//sign out 

function signOutUser(){
    return  signOut(auth);
  }


//After each update im rerendring to catch the updated info of user 


useEffect(() => {
  // This effect will trigger every time `user` changes

}, [user]);
// set user from registration 

  const updateUser = (updatedUser) => {
    setUser(updatedUser); // Update the user state in context
  };



//---------------- ---------- - - -- - - - -- - - - - - -- - - - -

//adding to props list
const authInfo={

  createUser,user,loading,SignInUser ,
  signOutUser,setUser,handleGoogleSignIn,
  swedishData,handleUpdateUser,setUser,updateUser ,isDarkMode, setIsDarkMode
  ,form2Data, setForm2Data



}
    return ( 
    
    <AuthContext.Provider value={authInfo }>

        {children}

    </AuthContext.Provider>  
    
    
);
}
 
export default Network;