import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import PlayerVisualsItem from './playerVisualsItem';

class PlayerCatVis extends Component {
  constructor(props) {
    super(props)
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
    let content;
    if (this.state.opened) {
      content =  <div>
        <div className="player-profile-dd-headings-2">
          <p onClick={this.handleOpenToggle}>{this.props.name} <i className="dd-arrow-up"></i></p>
        </div>
        <PlayerVisualsItem stats={this.props.stats} labels={this.props.labels} num={this.props.num} />
      </div>
    } else {
      content = <div className="player-profile-dd-headings-2">
        <p onClick={this.handleOpenToggle}>{this.props.name} <i className="dd-arrow-down"></i></p>
      </div>
    }
    return(
      <div>
        {content}
      </div>
    )
  }
}

export default PlayerCatVis;