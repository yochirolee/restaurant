import React, { useState, ReactDOM } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

export default function Facebook() {
  const [userId, setUserId] = useState();
  const [name, setName] = useState();
  const [picture, setPicture] = useState();
  const [email, setEmail] = useState();
  const [isLoggin, setIsLoggin] = useState(false);

  const responseFacebook = (response) => {
    console.log(response);
    if (response === "unknown") return;
    setName(response.name);
    setEmail(response.email);

    console.log(name, email);
  };
  const componentClicked = () => {};

  return isLoggin ? (
    <h1>loggin</h1>
  ) : (
    <div>
      <FacebookLogin
        appId="3018282618259498"
        autoLoad={false}
        callback={responseFacebook}
        fields="name,email,picture"
        render={(renderProps) => (
          <i className="fab fa-facebook-f" onClick={renderProps.onClick}>Facebook</i>
        )}
      />
    </div>
  );
}
