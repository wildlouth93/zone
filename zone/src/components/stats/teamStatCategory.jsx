import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import TeamStatItem from './teamStatItem';
import TeamStatItemVisuals from './teamStatItemVisuals';

class TeamStatCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false, 
      opened2: false
    }
    this.handleOpenToggle = this.handleOpenToggle.bind(this);
    this.handleOpen2Toggle = this.handleOpen2Toggle.bind(this);
  }

  handleOpenToggle() {
    if (this.state.opened) {
      this.setState({opened: false})
    } 
    if (this.state.opened === false) {
      this.setState({opened: true})
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

  render() {
    // console.log(this.props);
    // console.log(this.state);
    // console.log(this.props.category);
    // console.log(this.props.category.stats);
    let moreStats;
    if (this.state.opened2) {
      moreStats = <div className="stat-dropdown-outer-box">
        <h4>{this.props.category.displayName} Numbers</h4>
        <TeamStatItem stats={this.props.category.stats} />
        <p onClick={this.handleOpen2Toggle}><i className="dd-arrow-up"></i></p>
      </div>
    } else {
      moreStats = <div>
        <p onClick={this.handleOpen2Toggle}><i className="dd-arrow-down"></i></p>
      </div>
    }
    let statDisplay;
    if (this.state.opened) {
      statDisplay = <div className="stat-icon-outer-box">
        <div className="stat-icon-box">
          <img onClick={this.handleOpenToggle} className="stat-icon" src={`png/${this.props.category.displayName}-icon.png`} alt="" />
          <h4 className="stat-index-heading" onClick={this.handleOpenToggle}>{this.props.category.displayName}</h4>
        </div>
        <h4>{this.props.category.displayName} Visuals</h4>
        <TeamStatItemVisuals stats={this.props.category.stats} displayName={this.props.category.displayName}/>
       {moreStats}
      </div>
    } else {
      statDisplay = <div className="stat-icon-outer-box">
        <div className="stat-icon-box">
          <img onClick={this.handleOpenToggle} className="stat-icon" src={`png/${this.props.category.displayName}-icon.png`} alt=""/>
          <h4 className="stat-index-heading" onClick={this.handleOpenToggle}>{this.props.category.displayName}</h4>
        </div>
      </div>
    }
    return (
      <div>
        {statDisplay}
      </div>
    )
  }
};

export default TeamStatCategory;