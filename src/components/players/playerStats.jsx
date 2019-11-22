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
    // console.log(this.props.stats);
    // console.log(this.props.stats.splitCategories);
    // console.log(this.props.labels);
    // console.log(this.props.displayNames);
    // console.log(this.props.categories);

    let labels = <ul className="split-labels">
      {this.props.labels.map((label, i) => (
        <li key={i}>{label}</li>
      ))
      }
    </ul>

    return <div className="player-stats-outer">
      <div>
        {
          this.props.stats.splitCategories.map((category, i) => (
            <div className="player-stats-2" key={i}>
              <div className="player-stats-inner">
                <h2>{category.name}</h2>
                {labels}
              </div>
              <PlayerSplits splits={category.splits} labels={this.props.labels} displayNames={this.props.displayNames} />
            </div>
          ))
        }
      </div>
    </div>
  }
}

export default PlayerStats;