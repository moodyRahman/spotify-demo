
import { useContext } from "react";
import {RefreshTokenContext, AccessTokenContext} from "../contexts/TokenContexts"
import SpotifyPlayer from 'react-spotify-web-playback';

function Home() {
    const refresh_token = useContext(RefreshTokenContext).refreshToken;
    const access_token = useContext(AccessTokenContext).accessToken;

    console.log(refresh_token, access_token)

    return (
        <div>
            hello there senpai, welcome home <br /><br /><br />

            take a peek at your creds  <br /><br /><br />

            refresh token: {refresh_token}  <br /><br /><br />
            access token: {access_token}  <br /><br /><br />

            that token is good for an hour, this demo does not implement automatic refreshes<br /> <br /> <br />
            typical flow for that is as follows: <br />
            
            before any API request, compare the current time to the estimated expiration time <br />
                
            &emsp;  if it's past expiration time, or near enough, make a POST request to https://accounts.spotify.com/api/token with the refresh token and set the contexts accordingly
            otherwise
            &emsp;  just make the request normally


            <SpotifyPlayer
            token={access_token}
            uris={['spotify:track:5BNAzE37hmpyCx0hyrgDqJ']}
            />;
        </div>

        


    )
}

export default Home;