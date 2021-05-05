import Home from "./components/Home/Home";
import Link from "./components/Link/Link";
import Logo from "./components/logo/logo";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import React from "react";

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      return (
         <Router>
            <div className="appNav">
               <ul>
                  <li style={{ color: "lightgreen" }}>React version</li>
                  <li>NextJS version</li>
               </ul>
            </div>
            <Logo />
            <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/:linkindex" component={Link} />
            </Switch>
         </Router>
      );
   }
}

export default App;
