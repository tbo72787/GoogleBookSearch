import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import search from "./search";
import saved from "./saved";
import nav from "./nav/nav";
import "../App.css"

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  render() {
    return (
      <Router>
        <div>
          <Nav/>
          <TitleCard/>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}
