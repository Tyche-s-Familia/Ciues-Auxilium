import React from "react";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";

import Feed from './feedView/Feed'
import Users from './userView/Users'
import Details from './detailView/Details'

import {
  GlobalStyles
} from './GlobalStyles'

// import axios from 'axios';
import useSWR from 'swr'

// import APIurl from './config'

export default function App() {

  const { data, error } = useSWR(`${APIurl}/users/list`)

  // if (error) return <div>failed to load</div>
  // if (!data) return <div>loading...</div>
  // const history = useHistory();
  // console.log(data.username)
  // axios
	// 		.get(`${APIurl}/projects/list`, {mode:'cors'})
	// 		.then(function (response) {
	// 			console.log(response);
	// 		})
	// 		// .then(() => history.push('/account'))
	// 		.catch(function (error) {
	// 			console.log(error);
	// 		});

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
