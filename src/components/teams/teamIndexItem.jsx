import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';

class TeamIndexItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log(this.props.team);
    // if (this.state.loading) return <h2>Loading...</h2>;

    let altColor = this.props.team.team.alternateColor;
    let color = this.props.team.team.color;
    // let border;
    // if (altColor === "ffffff" ) {
    //   border = color
    // } else {
    //   border = "ffffff";
    // }

    let style = {
      color: `#${color}`, 
      background: `#${altColor}`
    }

    let style2 = {
      // color: `#${altColor}`,
      // background: `#${color}`,
      // color: `#${color}`,
      // border: `1px solid #ffffff`,
      color: `#ffffff`
    }

    // let style = `color: ${color}, background: ${altColor}`;
    return (
      <div className="team-index-item">
        <HashRouter>
          <Link className="team-index-link" to={`teams/${this.props.team.team.id}`}>
            <img className="team-index-logo" style={style} src={this.props.logo.href} />
            <h2 className="team-index-name" style={style2} >{this.props.team.team.displayName}</h2>
            {/* <h1 className="team-index-name">{this.props.team.team.displayName}</h1> */}
           
          </Link>
        </HashRouter>
      </div>
    )
  }
}

export default TeamIndexItem;
