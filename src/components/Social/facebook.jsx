import React, { useContext } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { FacebookContext } from "../../Context/FacebookContext";

export default function Facebook(props) {
  const [facebookLogin, setFacebookLogin] = useContext(FacebookContext);

  const responseFacebook = (response) => {
    

    let faceLogin = {
      userId: response.id,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
      isLogin: true,
    };
   // setFacebookLogin(facebookLogin => ({ ...facebookLogin, isLogin: 'Perico' }));
     setFacebookLogin(faceLogin);
  };

  return (
    <div>
      <FacebookLogin
        appId="3018282618259498"
        autoLoad={false}
        callback={responseFacebook}
        fields="name,email,picture"
        render={(renderProps) => (
          <i className="fab fa-facebook-f" onClick={renderProps.onClick}>
            Facebook
          </i>
        )}
      />
    </div>
  );
}
