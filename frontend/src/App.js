import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
// import {Navbar} from './components'
import GlobalStyles from './GlobalStyles'
import Navbar from './components/Navbar/Navbar';

export default function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
    </Router>
  )
}
