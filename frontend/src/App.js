import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Feed from './feedView/Feed'
import Users from './userView/Users'
import Details from './detailView/Details'

export default function App() {

  return (
    <Router>
      <Route exact path='/' render={() => <Feed />} />
      <Route exact path='/account' component={Users} />
      <Route exact path='/details' component={Details} />
    </Router>
  )
}
