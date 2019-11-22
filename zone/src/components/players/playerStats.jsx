import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import PlayerSplits from './playerSplits';

class PlayerStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    }
    this.handleOpenToggle = this.handleOpenToggle.bind(this);

  }

  handleOpenToggle() {
    if (this.state.opened) {
      this.setState({ opened: false })
    }
    if (this.state.opened === false) {
      this.setState({ opened: true })
    }
  }

  render() {
    console.log(this.props.stats);
    console.log(this.props.stats.splitCategories);
    // console.log(this.props.labels);
    // console.log(this.props.displayNames);
    // console.log(this.props.categories);

    let labels = <ul className="split-labels">
      {this.props.labels.map((label, i) => (
        <li key={i}>{label}</li>
      ))
      }
    </ul>

    let statComp;
    if (this.state.opened) {
      statComp = <div>
      {
        this.props.stats.splitCategories.map((category, i) => (
          <div className="player-stats" key={i}>
            <div className="player-stats-inner">
              <h2>{category.name}</h2>
              {labels}
            </div>
            <PlayerSplits splits={category.splits} labels={this.props.labels} displayNames={this.props.displayNames} />
            
          </div>
        ))
      }
      </div>
    } else {
      statComp = <div className="player-stats">
         <div className="player-stats-inner">
          <h2 className="player-dd-header" onClick={this.handleOpenToggle}>Player Stats <i className="dd-arrow-down"></i></h2>
          {/* {labels} */}
        </div>
      </div>
    }

    let bottomDD;

    if (this.state.opened) {
      bottomDD = <div>
        <p className="player-dd" onClick={this.handleOpenToggle}><i className="dd-arrow-up"></i></p>
      </div>
    } else {
      bottomDD = <div></div>
    }



    return <div className="player-stats-outer">
      {statComp}
      {bottomDD}
        
      {/* <p onClick={this.handleOpenToggle}> <i className="dd-arrow-down"></i></p> */}
    </div>
  }
}

export default PlayerStats;