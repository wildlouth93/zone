import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import OppTeamStatItem from './oppTeamStatItem';
import TeamStatItemVisuals from './teamStatItemVisuals';
import TeamStatItem from './teamStatItem';

class OppTeamStatCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened3: false,
      opened4: false
    }
    this.handleOpen3Toggle = this.handleOpen3Toggle.bind(this);
    this.handleOpen4Toggle = this.handleOpen4Toggle.bind(this);
  }

  handleOpen3Toggle() {
    if (this.state.opened3) {
      this.setState({ opened3: false })
    }
    if (this.state.opened3 === false) {
      this.setState({ opened3: true })
    }
  }

  handleOpen4Toggle() {
    if (this.state.opened4) {
      this.setState({ opened4: false })
    }
    if (this.state.opened4 === false) {
      this.setState({ opened4: true })
    }
  }

  render() {
    // console.log(this.props);
    // console.log(this.state);
    // console.log(this.props.category);
    // console.log(this.props.category.stats);
    // console.log(this.props.teamCategory.stats);
    let moreStats2;
    if (this.state.opened4) {
      moreStats2 = <div className="opp-visuals-dropdown">
        <h4>Opponent Stats</h4>
        <TeamStatItemVisuals stats={this.props.category.stats} displayName={this.props.category.displayName} />
        <TeamStatItem stats={this.props.category.stats} />
        <p onClick={this.handleOpen4Toggle}><i className="dd-arrow-up"></i></p>
      </div>
    } else {
      moreStats2 = <div>
        <p onClick={this.handleOpen4Toggle}><i className="dd-arrow-down"></i></p>
      </div>
    }

    let statDisplay2;
    if (this.state.opened3) {
      statDisplay2 = <div className="stat-icon-outer-box">
        <div className="stat-icon-box">
          <img onClick={this.handleOpen3Toggle} className="stat-icon" src={`png/${this.props.category.displayName}-icon.png`} alt="" />
          <h4 className="stat-index-heading" onClick={this.handleOpen3Toggle}>{this.props.category.displayName}</h4>
        </div>
        <h4>Opponent Comparisons</h4>
        <OppTeamStatItem stats={this.props.category.stats} teamStats={this.props.teamCategory.stats} />
        
        {moreStats2}
      </div>
    } else {
      statDisplay2 = <div className="opp-stat-icon-outer-box">
        <div className="stat-icon-box">
          <img onClick={this.handleOpen3Toggle} className="stat-icon" src={`png/${this.props.category.displayName}-icon.png`} alt="" />
          <h4 className="stat-index-heading" onClick={this.handleOpen3Toggle}>{this.props.category.displayName}</h4>
        </div>
      </div>
    }
    return (
      <div>
        {statDisplay2}
      </div>
    )
  }
};

export default OppTeamStatCategory;
