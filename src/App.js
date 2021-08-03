import React from 'react';
import { Container } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import AppToolbar from './components/UI/AppToolbar/AppToolbar';
import Photos from "./containers/Photos/Photos";
import CurrentAuthorPhotos from "./containers/CurrentAuthorPhotos/CurrentAuthorPhotos";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import NewPhoto from './containers/NewPhoto/NewPhoto';

const ProtectedRoute = ({isAllowed, redirectTo, ...props}) => {
  return isAllowed ?
      <Route {...props} /> :
      <Redirect to={redirectTo}/>
};

const App = () => {
  const user = useSelector(state => state.users.user);
  return(
    <>
      <AppToolbar />
      <main>
        <Container maxWidth="xl">
          <Switch>
            <ProtectedRoute
              isAllowed={user !== null}
              redirectTo={"/login"}
              path="/photos/new"
              exact
              component={NewPhoto}
            /> 
            <Route path="/" exact component={Photos} />
            <Route path="/authors/:id" exact component={CurrentAuthorPhotos} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </Container>
      </main>
    </>
  )
};

export default App;
