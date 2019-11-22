import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import PlayerSplitItem from './playerSplitItem';

class PlayerSplits extends Component {

  render() {
    console.log(this.props.splits);
    // console.log(this.props.labels);
    // console.log(this.props.displayNames);
    // let labels;

    let splitsDisplay;
   if (this.props.splits) {
     splitsDisplay = 
      <div className="player-splits-outer">
         {this.props.splits.map((split, i) => (
           <div className="player-stats-inner" key={i}>
             <p>{split.displayName}</p>
             <PlayerSplitItem split={split} labels={this.props.labels} displayNames={this.props.displayNames} />
           </div>
         ))}
      </div>
   } else {
     splitsDisplay = <div className="player-splits-outer">
       <div className="player-stats-inner">
        <p>No stats for this player</p>
       </div>
     </div>
   }

    return <div>
      {splitsDisplay}
    </div>
  }
}

export default PlayerSplits;