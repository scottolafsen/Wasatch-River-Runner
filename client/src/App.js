import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import RiverMap from "./pages/RiverMap";
import River from "./pages/River";
import NoMatch from "./pages/NoMatch";
import Example from "./components/NavigationBar";

function App() {
  return (
    <Router>
      <div>
      <Example />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rivermap" component={RiverMap} />
          <Route exact path="/rivers/:id" component={River} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
