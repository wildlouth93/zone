import React, { PureComponent } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import PlayerIndexItem from './playerIndexItem';
import TeamPlayerIndexItem from './teamPlayerIndexItem';

class PlayerShow extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      player: {},
      stats: {},
      loading: true
    };
    this.getPlayer = this.getPlayer.bind(this);
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
    
    
    if (this.state.loading) return <h2>Loading...</h2>;
 
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
    return (
      <div>
        <HashRouter><Link to="/">Teams</Link></HashRouter>
        <br/>
        <HashRouter><Link to={`/teams/${this.state.player.athlete.team.id}`}>{this.state.player.athlete.team.displayName}</Link></HashRouter>
        {/* <h1 className="team-index-name" style={style} >{this.props.team.team.displayName}</h1> */}

        <h1>{this.state.player.athlete.displayName}</h1>
        <img className="player-profile-headshot" src={headshot} alt="logo192.png" />

        <ul className="player-player-index-ul">
          {this.state.player.playerSwitcher.athletes.map((player, i) => (
            <TeamPlayerIndexItem player={player} key={i} />
          ))}
        </ul>
      </div>
    )
  }
}

export default PlayerShow;