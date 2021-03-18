
import { useContext } from "react";
import {RefreshTokenContext, AccessTokenContext} from "../contexts/TokenContexts"

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

            that token is good for an hour, this demo does not implement automatic refreshes
        </div>
    )
}

export default Home;