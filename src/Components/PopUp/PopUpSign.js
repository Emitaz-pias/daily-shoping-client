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
  const [loggedInUser, setLoggedInUser] = user;
  const googleSignInprovider = new firebase.auth.GoogleAuthProvider();
  const fbSignInprovider = new firebase.auth.FacebookAuthProvider();

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const handlePopUpSignIn = (provider) => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        setLoggedInUser(result.user);
        storeToken();
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    history.replace(from);
  };
  const handleFbSignIn = (provider) => {
    handlePopUpSignIn(provider);
  };
  const handleGoogleSignIn = (provider) => {
    handlePopUpSignIn(provider);
  };
  const storeToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        // Send token to your backend via HTTPS
        sessionStorage.setItem("token", idToken);
      })
      .catch(function (error) {
        // Handle error
        console.log("id token error is ", error);
      });
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="">
        <button
          onClick={() => handleFbSignIn(fbSignInprovider)}
          className="mt-3 btn-lg customPopUpBtn"
        >
          <span className="d-flex justify-content-around mr-2">
            <img className="buttonImg" src={fb} alt="" />
            <span> Continue with facebook</span>
          </span>
        </button>
        <br />
        <button
          onClick={() => handleGoogleSignIn(googleSignInprovider)}
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
