import React, { Component } from 'react';
// import Nav from 'nav.jsx'
import TeamIndex from './teams/index';

class Game extends Component {
  constructor(props) {
    super(props);
  
  }

  render() {

    return (
      <div>
        {/* <Nav /> */}
        {/* <ul>

        </ul>
        <p>{this.state.game.id}</p>
        <p>This is working right now.</p> */}
        {/* <p>{this.state.game.summary.away.name}</p> */}
        <div className="home-body">
          <h1 className="home-heading">Teams</h1>
          
          <TeamIndex className="home-team-index"/>
        </div>
      </div>
    )
  }
};

export default Game;
