import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import PlayerVisualsItem from './playerVisualsItem';
import PlayerCatVis from './playerCatVis';

class PlayerVisuals extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opened: true
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
    // console.log(this.props.categories);
    // console.log(this.props.labels);
    // console.log(this.props.displayNames);
    console.log(this.props.displayNames[0]);
    let content;
    if (this.state.opened) {
      content = <div>
        {this.props.displayNames.map((name, i) => (
          <div className="player-visual-nest-1" key={i} >
            {/* <div className="player-profile-dd-headings-2">
              <p onClick={this.handleOpenToggle}>{name} <i className="dd-arrow-up"></i></p>
            </div> */}
            <PlayerCatVis name={name} stats={this.props.stats} labels={this.props.labels} num={i}  />
            {/* <PlayerVisualsItem stats={this.props.stats} labels={this.props.labels} num={i} /> */}
          </div>
        ))
        }
      </div>
    } else {
      content = <div>
        {this.props.displayNames.map((name, i) => (
          <div className="player-visual-nest-1" key={i} >
            <div className="player-profile-dd-headings-2">
              <p onClick={this.handleOpenToggle}>{name} <i className="dd-arrow-down"></i></p>
            </div>
            {/* <PlayerVisualsItem stats={this.props.stats} labels={this.props.labels} num={i} /> */}
          </div>
        ))
        }
      </div>
    }
    
    return (
      <div>
        {/* {this.props.displayNames.map((name, i) => (
          <div className="player-visual-nest-1" key={i} >
              <div className="player-profile-dd-headings-2">
                <p onClick={this.handleOpenToggle}>{name} <i className="dd-arrow-down"></i></p>
              </div>
              <PlayerVisualsItem stats={this.props.stats} labels={this.props.labels} num={i} />
          </div>
        ))
        } */}
        {content}
      </div>
    )
  }
}

export default PlayerVisuals;