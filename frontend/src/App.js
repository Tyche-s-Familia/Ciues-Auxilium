import React from "react";
import APIurl from "./config"
import axios from "axios"
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";

import Feed from './feedView/Feed'
import Users from './userView/Users'
import Details from './detailView/Details'

import {
  GlobalStyles
} from './GlobalStyles'

export default function App() {

  const history = useHistory();
  axios
			.get(`${APIurl}users`, {mode:'cors'})
			.then(function (response) {
				console.log(response);
			})
			.then(() => history.push('/account'))
			.catch(function (error) {
				console.log(error);
			});

  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path='/' render={Feed} />
        <Route exact path='/account' component={Users} />
        <Route exact path='/details' component={Details} />
      </Switch>
    </Router>
  )
}
