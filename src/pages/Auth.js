import { useContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import {
  RefreshTokenContext,
  AccessTokenContext,
} from "../contexts/TokenContexts";

function Auth() {
  const setRefreshToken = useContext(RefreshTokenContext).setRefreshToken;
  const setAccessToken = useContext(AccessTokenContext).setAccessToken;
  let history = useHistory();

  const location = useLocation();

  useEffect(() => {

    const code = new URLSearchParams(location.search).get("code");
    const data = {
      grant_type: encodeURIComponent("authorization_code"),
      code: encodeURIComponent(code),
      redirect_uri: "http://localhost:3000/auth",
    };

    let formData = new FormData();
    Object.keys(data).forEach((key) =>
      formData.append(encodeURIComponent(key), encodeURIComponent(data[key]))
    );

    console.log("sending it out!!!");
    console.log(new URLSearchParams(data));

    fetch("https://accounts.spotify.com/api/token", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "",
      },
      body: new URLSearchParams(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setAccessToken(data.access_token);
        setRefreshToken(data.refresh_token);
        history.push("/home");
      });
  }, [setAccessToken, setRefreshToken, history, location.search]);

  // dependency array contains only immutable function references
  // this useEffect should run only ever once

  return <div>implement some cool loading screen here</div>;
}

export default Auth;
