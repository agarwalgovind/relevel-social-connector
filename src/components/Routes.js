import React, { lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NotFound from "../assets/404.webp";

const Signin = lazy(() => import("./Signin"));
const Signup = lazy(() => import("./Signup"));
const Home = lazy(() => import("./Home"));
const Search = lazy(() => import("./SearchPage"));
const FriendRequest = lazy(() => import("./FriendRequest"));
const Friend = lazy(() => import("./Friend"));
const EditPage = lazy(() => import("./EditPage"));
const NoMatchPage = () => {
  return (
    <div id="error">
      <img src={NotFound} alt="404" style={{ height: "90vh" }} />
    </div>
  );
};

const Routes = (props) => {
    return (
    <Switch {...props}>
        <Route exact path="/" render={() => (
            <Home {...props} />
        )}/>
      <Route path="/login" render={() => (
          <Signin {...props} />
      )}/> />
      <Route path="/signup" component={Signup} />
        <Route path="/search" component={Search} />
        <Route exact path="/friendrequest" component={FriendRequest} />
        <Route exact path="/friend" component={Friend} />
        <Route exact path="/edit" component={EditPage} />


      <Route component={NoMatchPage} />
    </Switch>
  );
};

export default Routes;
