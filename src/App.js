import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Feed from './feedView/Feed'
import Users from './userView/Users'
import Details from './detailView/Details'

import {
  GlobalStyles
} from './GlobalStyles'
import SignUp from "./formView/SignUp";

export default function App() {

  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path='/' render={() => <Feed />} />
        <Route exact path='/account' component={Users} />
        <Route exact path='/details/:id' component={Details} />
        <Route exact path='/signup' render={() => <SignUp />} />
      </Switch>
    </Router>
  )
}
