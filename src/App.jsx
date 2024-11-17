


import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from './firebase.config';



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


    </>
  )
}

export default App
