import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import RiverMap from "./pages/RiverMap";
import River from "./pages/River";
import NoMatch from "./pages/NoMatch";
import NavBar from "./components/NavigationBar";

function App() {
  return (
    <Router>
      <div>
      <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rivermap" component={RiverMap} />
          <Route exact path="/:id" component={River} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
