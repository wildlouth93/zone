import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';

class PlayerSplitItem extends Component {

  render() {
    // console.log(this.props.split);
    // console.log(this.props.labels);
    // console.log(this.props.displayNames);

    return <ul className="split-labels">
      {this.props.split.stats.map((stat,i) => (
          // {/* <p>{this.props.displayNames[i]}</p> */}
          // {/* <p>{this.props.labels[i]}</p> */}
          <li key={i}>{stat}</li>
      ))
      }
    </ul>
  }
}

export default PlayerSplitItem;