
import { useContext, useEffect, useState } from "react";
import {RefreshTokenContext, AccessTokenContext} from "../contexts/TokenContexts"
import SpotifyPlayer from 'react-spotify-web-playback';

function Home() {
    const refresh_token = useContext(RefreshTokenContext).refreshToken;
    const access_token = useContext(AccessTokenContext).accessToken;
    const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");

    useEffect(()=>{
        fetch("https://api.spotify.com/v1/me", {
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + access_token,
                "Content-Type": "application/json"
            }
        })
      .then((response) => response.json())
      .then((data) => {
          setUsername(data.display_name);
          setEmail(data.email)
      });
    })

    return (
        <div>
            hello there senpai, welcome home <br /><br /><br />

            take a peek at your creds  <br /><br /><br />

            refresh token: {refresh_token}  <br /><br /><br />
            access token: {access_token}  <br /><br /><br />

            that token is good for an hour, this demo does not implement automatic refreshes -- not that it matters LMAO, everything is stored in a context that gets wiped on page reset<br /> <br /> <br />
            typical flow for that is as follows: <br />
            
            before any API request, compare the current time to the estimated expiration time <br />
                
            &emsp;  if it's past expiration time, or near enough, make a POST request to https://accounts.spotify.com/api/token with the refresh token and set the contexts accordingly <br />
            otherwise
            &emsp;  just make the request normally <br /> <br />

            getting the information below from an authorized request <br />

            Your name is: <b>{userName}</b> <br />
            Your email is: <b>{email}   </b> <br /><br /><br />


            the music player below is going to play you one one of my favorite songs :) <br />
            
            <SpotifyPlayer
            token={access_token}
            uris={['spotify:track:5BNAzE37hmpyCx0hyrgDqJ']}
            />;
        </div>

    )
}

export default Home;