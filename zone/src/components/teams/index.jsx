import React, { Component } from 'react';
import TeamIndexItem from './teamIndexItem';

// const API_KEY = "aj6w9zffnfngdg8v5gnbfudj";

class TeamsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: this.getTeams(),
      loading: true
    };
    this.getTeams = this.getTeams.bind(this);
  }

  componentDidMount() {
    this.getTeams();
    this.state.loading = false;
  }

  getTeams = async () => {

    const api_call = await fetch('http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams');
    const data = await api_call.json();
    this.setState({ teams: data.sports[0].leagues[0].teams})
  }

  render() {
    // this.getTeams();
    if (this.state.loading) return <h2>Loading...</h2>;
    return (
      <div>
        <ul className="team-index-ul">
          {this.state.teams.map((team, i) => (
            <TeamIndexItem team={team} teamId={team.team.id} key={i} logo={team.team.logos[0]} />
          ))}
          {/* <TeamIndexItem team={this.state.teams[0]} /> */}
        </ul>
      </div>
    )
  }
};

export default TeamsIndex;
