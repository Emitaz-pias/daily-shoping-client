import firebase from "firebase/app";
import "firebase/auth";
import { useEffect } from "react";
import { useContext } from "react";
import { UsersContext } from "../../App.js";
import firebaseConfig from "./firebase.config.js";

firebase.initializeApp(firebaseConfig);

const AuthManager = () => {
  const { logingWithEamil, createUserEamil } = useContext(UsersContext);
  const [signInWithEamilAndPssword, setSignInWithEamilAndPssword] =
    logingWithEamil;
  const [createUser, setCreateUser] = createUserEamil;

  // create account with email and password
  const createAcc = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };
  // create user
  useEffect(() => {
    setCreateUser(() => createAcc);
  }, []);
  // sign in with email and password
  const emailSignIn = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
    console.log("it the fuj");
  };
  // create user

  useEffect(() => {
    setSignInWithEamilAndPssword(() => emailSignIn);
  }, []);

  return <div></div>;
};

export default AuthManager;
