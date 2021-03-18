import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Auth from "./pages/Auth";
import Home from "./pages/Home"
import { RefreshTokenContext, AccessTokenContext } from "./contexts/TokenContexts";
import { useState } from "react";

function App() {
  var my_client_id = "99bb76f8a9754f18af1f006a04e66eb2";
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  
  return (

    <RefreshTokenContext.Provider value={{refreshToken, setRefreshToken}}>
      <AccessTokenContext.Provider value={{accessToken, setAccessToken}}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Login my_client_id={my_client_id} />
            </Route>

            <Route path="/auth">
              <Auth />
            </Route>

            <Route path="/about">displaying ur login details</Route>

            <Route path="/user">dfhjyt</Route>

            <Route path="/home"> <Home /> </Route>

            <Route>dfghghhghhhhhh</Route>
          </Switch>
        </Router>
      </AccessTokenContext.Provider>
    </RefreshTokenContext.Provider>
  );
}

export default App;
