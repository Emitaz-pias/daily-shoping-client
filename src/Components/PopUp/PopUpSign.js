import React from "react";
import "./PopUpSign.css";
import fb from "../../icons/fb.png";
import googlePic from "../../icons/google.png";
const PopUpSign = () => {
  const handleFbSignIn = () => {
    // console.log("hello Minu fb sign in button clicked");
  };
  const handleGoogleSignIn = () => {
    // console.log("hello Minu google sign in button clicked");
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
