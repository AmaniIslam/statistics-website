import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Statistics from "./components/pages/Statistics";
import LeagueSchedules from "./components/pages/LeagueSchedules";
import Videos from "./components/pages/Videos";
import Footer from "./components/Footer";
import Napp from "./components/navbar/Napp";

function App() {
  return (
    <>
      <Router>
        <Napp />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/statistics" component={Statistics} />
          <Route path="/videos" component={Videos} />
          <Route path="/league-schedules" component={LeagueSchedules} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
