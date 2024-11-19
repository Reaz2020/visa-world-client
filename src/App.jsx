


import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from './firebase.config';
import { ToastContainer } from 'react-toastify';



function App() {


  const googleProvider =  new GoogleAuthProvider ();


  const handleGoogleSignIn =()=> {
    signInWithPopup(auth, googleProvider)
   
  }

  return (
    <>
     
   <div>helooooo--</div>
   <button onClick={handleGoogleSignIn}>
    Login .. .... . . . . . . . .
   </button>

   <div className="App">



</div>
    </>
  )
}

export default App
