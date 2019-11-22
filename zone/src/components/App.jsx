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
import ExBarChart from './charts/exBarChart.jsx';
import ExPieChart from './charts/exPieChart.jsx';


const App = () => {
  return (
    <HashRouter>
      <Switch>
        {/* <Route path="/ingredient" component={IngredientSearch} /> */}
        {/* <Route exact path="/" component={Game} /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/teams" component={TeamsIndex} />
        <Route exact path="/teams/:teamId" component={TeamShow} />
        <Route exact path="/players/:playerId" component={PlayerShow} />
        <Route exact path="/exbar" component={ExBarChart} />
        <Route exact path="/expie" component={ExPieChart} />
      </Switch>
    </HashRouter>
  );
};

export default App;