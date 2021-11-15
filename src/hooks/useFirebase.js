import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut, onAuthStateChanged, updateProfile, getIdToken } from "firebase/auth";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";


initializeFirebase();

   const useFirebase = () => {
   const [user, setUser] = useState({});
   const [isLoading, setIsLoading] = useState(true);
   const [authError, setAuthError] = useState('');
   const [admin, setAdmin] = useState(false);
   const [ token, setToken] = useState('');

   const auth = getAuth();
    
   // register function
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

  // login function
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
    getIdToken(user)
    .then(idToken => {
      setToken(idToken)
    })
  } else {
     setUser({})
  }
  setIsLoading(false);
});
 return () => unsubscribe
}, [])
  
//server part
 useEffect(() => {
   fetch(`http://localhost:5000/users/${user.email}`)
   .then(res => res.json())
   .then(data => setAdmin(data.admin))
 }, [user.email])

const logOut = () => {
    signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
 
})
  .finally(() => setIsLoading(false));

}
   // save user to server function
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
       admin,
       registerUser,
       logOut,
       loginUser,
       isLoading,
       authError,
       token

   }
}

export default useFirebase;