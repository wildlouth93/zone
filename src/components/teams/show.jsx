import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import PlayerIndexItem from '../players/playerIndexItem';
import TeamPlayerIndexItem from '../players/teamPlayerIndexItem';
import TeamStatItem from '../stats/teamStatItem';
import TeamStatCategory from '../stats/teamStatCategory';
import OppTeamStatCategory from '../stats/oppTeamStatCategory';
import TeamIndex from './index.jsx';

class TeamShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: {},
      roster: {},
      stats: {},
      loading: true,
      offense: true,
      defense: false, 
      specTeam: false,
      opponent: false
    };
    this.getTeam = this.getTeam.bind(this);
    this.handleDefenseToggle = this.handleDefenseToggle.bind(this);
    this.handleSTToggle = this.handleSTToggle.bind(this);
    this.handleOffenseToggle = this.handleOffenseToggle.bind(this);
    this.handleOpponentToggle = this.handleOpponentToggle.bind(this);
  }

  componentDidMount() {
    this.getTeam();
    this.state.loading = false;
  }

  handleDefenseToggle() {
    if (this.state.defense === false) {
      this.setState({defense: true})
    } 
    if (this.state.defense === true) {
      this.setState({ defense: false })
    }
  }

  handleSTToggle() {
    if (this.state.specTeam === false) {
      this.setState({ specTeam: true })
    } 
    if (this.state.specTeam === true) {
      this.setState({ specTeam: false })
    }
  }

  handleOffenseToggle() {
    if (this.state.offense === false) {
      this.setState({ offense: true })
    }
    if (this.state.offense === true) {
      this.setState({ offense: false })
    }
  }

  handleOpponentToggle() {
    if (this.state.opponent === false) {
      this.setState({ opponent: true })
    }
    if (this.state.opponent === true) {
      this.setState({ opponent: false })
    }
  }

  getTeam = async () => {
    let teamId = this.props.match.params.teamId;
    const api_call = await fetch(`http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/${teamId}`);
    const api_call2 = await fetch(`http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/${teamId}/roster`);
    const api_call3 = await fetch(`http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/${teamId}/statistics`)
    const data = await api_call.json();
    const rosterData = await api_call2.json();
    const statData = await api_call3.json()
    this.setState({ team: data, roster: rosterData, stats: statData});
  }


  render() {
    if (this.state.loading) return <div class="loader"></div>;
    // console.log(this.state.team);
    console.log(this.state.roster);
    console.log(this.state.team);
    // console.log(this.state.stats.results.stats.categories);
    // console.log(this.state.roster.athletes[0].items);
    let offDiv;
    if (this.state.offense) {
      offDiv =
        <div>
          <h2 onClick={this.handleOffenseToggle}>Offense <i className="dd-arrow-up"></i></h2>
          <ul className="team-player-index-ul" >
            {
              this.state.roster.athletes[0].items.map((player, i) => (
                <TeamPlayerIndexItem player={player} key={i} />
              ))
            }
          </ul>
      </div>
    } else {
      offDiv = <h2 onClick={this.handleOffenseToggle}>Offense <i className="dd-arrow-down"></i></h2>
    };

    let defDiv;
    if (this.state.defense) {
      defDiv = 
        <div>
          <h2 onClick={this.handleDefenseToggle}>Defense <i className="dd-arrow-up"></i></h2>
      
          <ul className = "team-player-index-ul" >
          {
            this.state.roster.athletes[1].items.map((player, i) => (
              <TeamPlayerIndexItem player={player} key={i} />
           
            ))
          }
          </ul>
        </div>
    } else {
      defDiv = <h2 onClick={this.handleDefenseToggle}>Defense <i className="dd-arrow-down"></i></h2>
    };
    let sTDiv;
    if (this.state.specTeam) {
      sTDiv =
        <div>
          <h2 onClick={this.handleSTToggle}>Special Teams <i className="dd-arrow-up"></i></h2>
          <ul className="team-player-index-ul" >
            {
              this.state.roster.athletes[2].items.map((player, i) => (
                <TeamPlayerIndexItem player={player} key={i} />
              ))
            }
          </ul>
        </div>
    } else {
      sTDiv = <h2 onClick={this.handleSTToggle}>Special Teams <i className="dd-arrow-down"></i></h2>
    };

    let oppDiv;
    if (this.state.opponent) {
      oppDiv = <div className="team-stats">
        <p onClick={this.handleOpponentToggle} className="opp-comp-heading">Opponent Comparison <i className="dd-arrow-up"></i></p>
        <div className="opp-team-stats-content">
          {
            this.state.stats.results.opponent.map((category, i) => (
              <div className="team-stats-category" key={i}>
                <OppTeamStatCategory category={category} teamCategory={this.state.stats.results.stats.categories[i]}/>
              </div>
            ))
          }
        </div>
      </div>
    } else {
      oppDiv = <p onClick={this.handleOpponentToggle} className="opp-comp-heading">Opponent Comparison <i className="dd-arrow-down"></i></p>
    }

    return (
      <div className="team-body">
        {/* <TeamIndex /> */}
        <div className="team-profile-nav">

        <h1 className="team-profile-name">{this.state.team.team.displayName}</h1>
        <HashRouter><Link to="/zone"><img className="team-profile-logo2" src="nfl_logo.png" alt="logo192.png" /></Link></HashRouter>
        </div>
        <div className="team-info">
          <img className="team-profile-logo" src={this.state.team.team.logos[0].href} />
          <div className="team-info-overview">
            <h1>Team Overview</h1>
            <h4>Record: {this.state.team.team.record.items[0].summary}</h4>
            <p>Home: {this.state.team.team.record.items[1].summary}</p>
            <p>Away: {this.state.team.team.record.items[2].summary}</p>
            <p>{this.state.team.team.standingSummary}</p>
            <h4>Coach: {this.state.roster.coach[0].firstName} {this.state.roster.coach[0].lastName}</h4>
          </div>
  
        </div>
        <div className="team-stats">
          <h1>Stats</h1>
          <div className="team-stats-content-outer">
            <h2>Team Stats</h2>
            <div className="team-stats-content">
              {
                this.state.stats.results.stats.categories.map((category, i) => (
                  <div className="team-stats-category" key={i}>
                    <TeamStatCategory category={category} />
                  </div>
                ))
              }
            </div>
            {oppDiv}
          </div>
        </div>
      
        <div className="team-roster">
          <h1>Roster</h1>
          <div className="team-roster-content"> 
            <div className="offensive-div">
              {offDiv}
            </div>
            <div className="defensive-div">
              {defDiv}
            </div>
            <div className="st-div">
              {sTDiv}
            </div>
          </div>
        </div>
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </div>
    )
  }
}

export default TeamShow;