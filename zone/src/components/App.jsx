// import logo from "../logo.svg";
import "../App.css";
import React from "react";
// import { Query } from "react-apollo";
import { HashRouter, Route, Switch } from "react-router-dom";

// import "../stylesheets/main.scss";

import Game from './games/show.jsx';
import Home from './home.jsx';
import TeamsIndex from './teams/index.jsx';
import TeamShow from './teams/show.jsx';
import PlayerShow from './players/show.jsx';
import Splash from './splash.jsx'


const App = () => {
  return (
    <HashRouter>
      <Switch>
        {/* <Route path="/ingredient" component={IngredientSearch} /> */}
        {/* <Route exact path="/" component={Game} /> */}
        <Route exact path="/" component={Splash} />
        <Route exact path="/zone" component={Home} />
        <Route exact path="/teams" component={TeamsIndex} />
        <Route exact path="/teams/:teamId" component={TeamShow} />
        <Route exact path="/players/:playerId" component={PlayerShow} />
      </Switch>
    </HashRouter>
  );
};

export default App;