import React, { Component } from 'react';
import TeamPlayerIndexItem from './teamPlayerIndexItem';

// const API_KEY = "aj6w9zffnfngdg8v5gnbfudj";

class PlayersIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: this.getTeam(),
      loading: true
    };
    this.getTeam = this.getTeam.bind(this);
  }

  componentDidMount() {
    this.getTeam();
    this.state.loading = false;
  }

  getTeam = async () => {
    // let teamId = this.props.match.params.teamId;
    const api_call = await fetch(`http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/10`);
    const api_call2 = await fetch(`http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/10/roster`);
    const api_call3 = await fetch(`http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/10/statistics`)
    const data = await api_call.json();
    const rosterData = await api_call2.json();
    const statData = await api_call3.json()
    this.setState({ team: data, roster: rosterData, stats: statData });
  }


  render() {
    // this.getTeams();
    if (this.state.loading) return <div className="loader"></div>;
  
    return (
      <div>
        <ul className="team-index-ul">
          {this.state.roster.athletes[0].items.map((player, i) => (
            <TeamPlayerIndexItem player={player} key={i} />
          ))}
          {/* <TeamIndexItem team={this.state.teams[0]} /> */}
        </ul>
      </div>
    )
  }
};

export default PlayersIndex;
