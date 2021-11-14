import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";


initializeFirebase();

   const useFirebase = () => {
   const [user, setUser] = useState({});
   const [isLoading, setIsLoading] = useState(true);
   const [authError, setAuthError] = useState('');

   const auth = getAuth();

   const registerUser = ( email, password, name, history) => {
     setIsLoading(true);
     createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
     setAuthError('');
     const newUser = {email, displayName: name};
     setUser(newUser);
     // save user to database
     saveUser(email, name);
     // send name to firebase after creation
     updateProfile(auth.currentUser, {
     displayName: name
}).then(() => {
  
}).catch((error) => {
 
});
     history.replace('/')
  })
  .catch((error) => {
    setAuthError(error.message);
  })
  .finally(() => setIsLoading(false));
}


  const loginUser = ( email, password, location, history)=> {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const destination = location?.state?.from || '/';
    history.replace(destination);
    setAuthError('');
  })
  .catch((error) => {
    setAuthError(error.message);
  })
  .finally(() => setIsLoading(false));
    }


   
  // user state  observer
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    setUser(user);
  } else {
     setUser({})
  }
  setIsLoading(false);
});
 return () => unsubscribe
}, [])



const logOut = () => {
    signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
 
})
  .finally(() => setIsLoading(false));

}

  const saveUser = (email, displayName) => {
      const user ={ email, displayName };
      fetch('http://localhost:5000/users', { 
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then()
  }


   return {
       user,
       registerUser,
       logOut,
       loginUser,
       isLoading,
       authError

   }
}

export default useFirebase;