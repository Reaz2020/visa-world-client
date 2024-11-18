


import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from './firebase.config';
import { ToastContainer } from 'react-toastify';



function App() {


  const googleProvider =  new GoogleAuthProvider ();


  const handleGoogleSignIn =()=> {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        console.log(result.user)
      })
      .catch(error => console.log('ERROR', error))
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
