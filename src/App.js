import React from "react";
import { Route, Switch } from "react-router-dom";
import Card from "./Card";
import Detail from "./Detail";

function App() {
  // const { classes } = props;

  return (
    // <div className="App">
    <Switch>
      <Route exact path="/" component={Card} />
      <Route exact path="/details/:id" component={Detail} />
    </Switch>
    // </div>
  );
}

export default App;
