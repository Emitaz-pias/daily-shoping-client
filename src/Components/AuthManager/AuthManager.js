import firebase from "firebase/app";
import "firebase/auth";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UsersContext } from "../../App.js";
import firebaseConfig from "./firebase.config.js";

firebase.initializeApp(firebaseConfig);

const AuthManager = () => {
  const { user, createUserEamil, logingWithEamil, loginWithPopUp } =
    useContext(UsersContext);
  const [loggedInUser, setLoggedInUser] = user;
  const [createUser, setCreateUser] = createUserEamil;
  const [signInWithEamilAndPssword, setSignInWithEamilAndPssword] =
    logingWithEamil;
  // create account with email and password
  const createAcc = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

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
        const user = userCredential.user;
        setLoggedInUser(user);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  // create user

  useEffect(() => {
    setSignInWithEamilAndPssword(() => emailSignIn);
  }, []);

  return <div></div>;
};

export default AuthManager;
