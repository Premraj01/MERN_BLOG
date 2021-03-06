/** @format */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Fragment, useEffect } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Landing from "./components/layout/Landing";
import Alert from "./components/layout/Alert";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/profile_forms/CreateProfile";
import EditProfile from "./components/profile_forms/EditProfile";
import Profiles from "./components/profiles/Profiles";
import Posts from "./components/posts/Posts";
import DisplayPost from "./components/posts/DisplayPosts";
import Post from "./components/post/Post";
import PrivateRoute from "./components/routing/PrivateRoute";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/profiles' component={Profiles} />
              <Route exact path='/displayposts' component={DisplayPost} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute
                exact
                path='/create-profile'
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path='/edit-profile'
                component={EditProfile}
              />
              <PrivateRoute exact path='/posts' component={Posts} />
              <PrivateRoute exact path='/posts/:id' component={Post} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
