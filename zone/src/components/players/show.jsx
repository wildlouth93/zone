import React, { PureComponent } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import PlayerIndexItem from './playerIndexItem';
import TeamPlayerIndexItem from './teamPlayerIndexItem';
import PlayerStats from './playerStats';
import PlayerVisuals from './playerVisuals';

class PlayerShow extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      player: {},
      stats: {},
      loading: true,
      opened: false, 
      opened2: false
    };
    this.getPlayer = this.getPlayer.bind(this);
    this.handleOpenToggle = this.handleOpenToggle.bind(this);
    this.handleOpen2Toggle = this.handleOpen2Toggle.bind(this);
  }

  handleOpenToggle() {
    if (this.state.opened) {
      this.setState({ opened: false })
    }
    if (this.state.opened === false) {
      this.setState({ opened: true })
    }
  }

  handleOpen2Toggle() {
    if (this.state.opened2) {
      this.setState({ opened2: false })
    }
    if (this.state.opened2 === false) {
      this.setState({ opened2: true })
    }
  }

  componentDidMount() {
    this.getPlayer();
    this.state.loading = false;
  }

  // componentWillUpdate() {
  //   this.getPlayer();
  // }

  componentDidUpdate() {
    if (this.state.player.athlete.id !== this.props.match.params.playerId) {
      this.getPlayer();
      this.state.loading = false;
    }
  }

  getPlayer = async () => {
    let playerId = this.props.match.params.playerId;

    // let playerId = "3043078";
    const api_call = await fetch(`https://site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/${playerId}`);
    const api_call2 = await fetch(`https://site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/${playerId}/splits`);
    const data = await api_call.json();
    const statData = await api_call2.json();
    this.setState({ player: data, stats: statData });
  }


  render() {
    
    if (this.state.loading) return <div class="loader"></div>;
 
    console.log(this.state.player);
    console.log(this.state.stats);
    
 
    let headshot;
    {
      if (this.state.player.athlete.headshot) {
        headshot = this.state.player.athlete.headshot.href;
      } else {
        headshot = "logo192.png";
      }
    }

    let playerStats;
    let playerStats2;
    let playerStats3;
    let playerStatsSummary;

    if (this.state.stats && this.state.stats.labels) {
      playerStats2 = <div>
        <div className="player-profile-dd-headings">
          <div className="player-stats">
            <div className="player-stats-inner">
              <h2 className="player-dd-header" onClick={this.handleOpenToggle}>Player Stats <i className="dd-arrow-up"></i></h2>
            </div>
          </div>
        </div>
        <PlayerStats stats={this.state.stats} categories={this.state.stats.categories} labels={this.state.stats.labels} displayNames={this.state.stats.displayNames} />
        <p className="player-dd" onClick={this.handleOpenToggle}><i className="dd-arrow-up"></i></p>
      </div>
      playerStats3 = <div className="player-profile-dd-headings">
        <div className="player-stats">
          <div className="player-stats-inner">
            <h2 className="player-dd-header" onClick={this.handleOpenToggle}>Player Stats <i className="dd-arrow-down"></i></h2>
          </div>
        </div>
      </div>
      playerStatsSummary = <div className="player-info-overview">
        <h1>Stat Summary</h1>
        <div className="player-stats-summary">
          {this.state.player.athlete.statsSummary.statistics.map((stat, i) => (
            <div key={i}>
              <p>{stat.displayName}</p>
              <p className="player-ss-value">{stat.displayValue}</p>
            </div>
          ))}
        </div>
      </div> 
    } else {
      playerStats2 = <div>
        <p>{this.state.player.athlete.displayName} has no stats.</p>
      </div>
      playerStats3 = <div>
        <p>{this.state.player.athlete.displayName} has no stats.</p>
      </div>
      playerStatsSummary = <div></div>
    }
    
    if (this.state.opened) {
      playerStats = <div>
        {playerStats2}
      </div>
    } else {
      playerStats = <div>
        {playerStats3}
      </div>
    }

    let playerVisuals;
    let playerVisuals2;
    let playerVisuals3;

    if (this.state.stats && this.state.stats.labels) {
      playerVisuals2 = <div>
        <div className="player-profile-dd-headings" >
          <div className="player-stats">
            <div className="player-stats-inner">
              <h2 className="player-dd-header" onClick={this.handleOpen2Toggle}>Player Visuals <i className="dd-arrow-up"></i></h2>
            </div>
          </div>
        </div>
        <PlayerVisuals stats={this.state.stats} categories={this.state.stats.categories} labels={this.state.stats.labels} displayNames={this.state.stats.displayNames} />
        <p className="player-dd" onClick={this.handleOpen2Toggle}><i className="dd-arrow-up"></i></p>
      </div>
      playerVisuals3 = <div className="player-profile-dd-headings">
        <div className="player-stats">
          <div className="player-stats-inner">
            <h2 className="player-dd-header" onClick={this.handleOpen2Toggle}>Player Visuals <i className="dd-arrow-down"></i></h2>
            <br />
          </div>
        </div>
      </div>       
    } else {
      playerVisuals2 = <div>
        <p>{this.state.player.athlete.displayName} has no visuals.</p>
      </div>
      playerVisuals3 = <div>
        <p>{this.state.player.athlete.displayName} has no visuals.</p>
      </div>
    }

    if (this.state.opened2) {
     
      playerVisuals = <div>
        {playerVisuals2}
      </div>
    } else {
      playerVisuals = <div>
        {playerVisuals3}
      </div>
    }

    return (
      <div className="player-profile">
        <div className="team-profile-nav">
          <h1 className="team-profile-name">{this.state.player.athlete.displayName}</h1>
          <HashRouter><Link to={`/teams/${this.state.player.athlete.team.id}`}> <img className="team-profile-logo2" src={this.state.player.athlete.team.logos[0].href} alt="logo192.png" /></Link></HashRouter>
          <img className="team-profile-logo2" src={this.state.player.athlete.collegeTeam.logos[0].href} alt="logo192.png" />
          <HashRouter><Link to="/zone"><img className="team-profile-logo2" src="nfl_logo.png" alt="logo192.png" /></Link></HashRouter>
        </div>

        <div className="team-info">
          <img className="player-profile-headshot" src={headshot} alt="logo192.png" />
          <div className="player-info-overview">
            <h1>Player Card</h1>
            <div className="player-stats-summary">
              <p>Birth Place</p>
              <p className="player-ss-value">{this.state.player.athlete.displayBirthPlace}</p>
              <p>Height</p>
              <p className="player-ss-value">{this.state.player.athlete.displayHeight}</p>
              <p>Weight</p>
              <p className="player-ss-value">{this.state.player.athlete.displayWeight}</p>
              <p>Birth Date</p>
              <p className="player-ss-value">{this.state.player.athlete.displayDOB}</p>
              <p>Age</p>
              <p className="player-ss-value">{this.state.player.athlete.age}</p>
              <p>Jersey No.</p>
              <p className="player-ss-value">{this.state.player.athlete.displayJersey}</p>
              <p>Experience</p>
              <p className="player-ss-value">{this.state.player.athlete.displayExperience}</p>
              <p>Draft Position</p>
              <p className="player-ss-value">{this.state.player.athlete.displayDraft}</p>
            </div>

          </div>
          {playerStatsSummary}
        </div>

      
        <div>

        </div>

        <div className="player-stat-visual-container">
          <div className="player-visuals">
            {playerVisuals}
          </div>

          <div className="player-stats-div">
            {/* <p>{this.state.stats.categories[0].name}</p>
            <p>{this.state.stats.labels[0]}</p>
            <p>{this.state.stats.names[0]}</p>
            <p>{this.state.stats.displayNames[0]}</p>
            <p>{this.state.stats.splitCategories[0].name}</p> */}
            {/* <h2 className="player-dd-header" onClick={this.handleOpenToggle}>Player Stats <i className="dd-arrow-down"></i></h2>
            <PlayerStats stats={this.state.stats} categories={this.state.stats.categories} labels={this.state.stats.labels} displayNames={this.state.stats.displayNames} /> */}
            {playerStats}
            
          </div>
        </div>

        <div className="player-player-index-div">
          <h1 className="player-roster-header">Other Notable {this.state.player.athlete.team.shortDisplayName}</h1>
          <ul className="player-player-index-ul">
            {this.state.player.playerSwitcher.athletes.map((player, i) => (
              <TeamPlayerIndexItem player={player} key={i} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default PlayerShow;