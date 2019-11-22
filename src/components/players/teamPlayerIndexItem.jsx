import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';

class TeamPlayerIndexItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.state.loading = false;
  }

  render() {
    // if (this.state.loading) return <p>Loading...</p>;
    // console.log(this.props.player.headshot);
    // console.log(this);
    let headshot;
    {
      if (this.props.player.headshot) {
        headshot = this.props.player.headshot.href;
      } else {
        headshot = "logo192.png";
      }
    }

    return (
      <div className="team-index-item">
        <HashRouter>
          <Link className="team-index-link" to={`/players/${this.props.player.id}`}>
            {/* <img className="team-player-roster-headshot" src={headshot} alt="logo192.png" /> */}
            <img className="team-index-logo" src={headshot} alt="logo192.png" />
            <h2 className="team-index-name">{this.props.player.displayName}</h2>
            <h2 className="team-index-name">{this.props.player.position.abbreviation} #{this.props.player.jersey}</h2>
            {/* <h2 className="team-index-name">{this.props.player.jersey}</h2> */}

            {/* <div className="team-player-index-info">
              <p>{this.props.player.displayName}</p>
              <p>{this.props.player.position.abbreviation}</p>
              <p>{this.props.player.jersey}</p>
            </div> */}
          </Link>
        </HashRouter>
        {/* <a href={`/players/${this.props.player.id}`}>Alt Player Page</a> */}
      </div>
    )
  }
}


export default TeamPlayerIndexItem;
