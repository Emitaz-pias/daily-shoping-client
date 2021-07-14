import firebase from "firebase/app";
import "firebase/auth";
import { useEffect } from "react";
import { useContext } from "react";
import { UsersContext } from "../../App.js";
import firebaseConfig from "./firebase.config.js";

firebase.initializeApp(firebaseConfig);

const AuthManager = () => {
  const { logingWithEamil } = useContext(UsersContext);
  const [signInWithEamilAndPssword, setSignInWithEamilAndPssword] =
    logingWithEamil;

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

  useEffect(() => {
    setSignInWithEamilAndPssword(() => emailSignIn);
  }, []);

  return <div></div>;
};

export default AuthManager;
