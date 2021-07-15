import React from "react";
import "./PopUpSign.css";
import fb from "../../icons/fb.png";
import googlePic from "../../icons/google.png";
import { UsersContext } from "../../App";
import { useContext } from "react";
import firebase from "firebase/app";
import { useHistory, useLocation } from "react-router";

const PopUpSign = () => {
  const { user, loginWithPopUp } = useContext(UsersContext);
  const [popUpSignIn, setPopUpSignIn] = loginWithPopUp;
  const googleSignInprovider = new firebase.auth.GoogleAuthProvider();
  console.log("this is pop up sign btn", popUpSignIn);

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const handleFbSignIn = () => {
    // console.log("hello Minu fb sign in button clicked");
  };
  const handleGoogleSignIn = () => {
    // console.log("hello Minu google sign in button clicked");
    firebase
      .auth()
      .signInWithPopup(googleSignInprovider)
      .then((result) => {
        const credential = result.credential;
        console.log("user is ", result.user.displayName);
        const token = credential.accessToken;
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    history.replace(from);
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="">
        <button onClick={handleFbSignIn} className="mt-3 btn-lg customPopUpBtn">
          <span className="d-flex justify-content-around mr-2">
            <img className="buttonImg" src={fb} alt="" />
            <span> Continue with facebook</span>
          </span>
        </button>
        <br />
        <button
          onClick={handleGoogleSignIn}
          className="mt-3 btn-lg customPopUpBtn"
        >
          <span className="d-flex justify-content-around mr-2">
            <img className="buttonImg" src={googlePic} alt="" />
            <span> Continue with google</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default PopUpSign;
