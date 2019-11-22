import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import PlayerVisualsInnerItem from './playerVisualsInnerItem';


class PlayerVisSplitCat extends Component {
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
      content = <div className="player-split-category" key={this.props.key} >
        <div className="player-profile-dd-headings-3">
          <p onClick={this.handleOpenToggle}>{this.props.category.name} <i className="dd-arrow-up"></i></p>
        </div>
        <PlayerVisualsInnerItem labels={this.props.labels} splits={this.props.category.splits} num={this.props.num} />
        {/* <PlayerVisualsItem stats={this.props.stats} labels={this.props.labels} /> */}
        {/* <div><h2 className="player-dd-header-split" onClick={this.handleOpenToggle}><i className="dd-arrow-up"></i></h2></div> */}
      </div>
    } else {
      content = <div className="player-split-category" key={this.props.key} >
        <div className="player-profile-dd-headings-3">
          <p onClick={this.handleOpenToggle}>{this.props.category.name} <i className="dd-arrow-down"></i></p>
        </div>
      </div>
    }
    return (
      <div>
        {content}
      </div>
    )
  }
}



export default PlayerVisSplitCat;