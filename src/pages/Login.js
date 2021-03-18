function Login({ my_client_id }) {
  var scopes = "user-read-private user-read-email";
  var redirect_uri = "http://localhost:3000/auth";
  var auth_uri =
    "https://accounts.spotify.com/authorize" +
    "?response_type=code" +
    "&client_id=" +
    my_client_id +
    (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
    "&redirect_uri=" +
    encodeURIComponent(redirect_uri);
  
  return (
    <div>
      login here <br />
      <a href={auth_uri}>login here</a>
    </div>
  );
}

export default Login;
