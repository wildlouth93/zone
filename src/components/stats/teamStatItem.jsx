import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import PieChart from '../charts/pieChart';

class TeamStatItem extends Component {


  render() {
    console.log(this.props.stats)
    return (
      <div className="team-stat-item-dropdown">
        <div>
        {
          this.props.stats.map((stat,i) => (
            <div className="team-ind-stat-item" key={i}>
              <p className="team-ind-stat-item-name">{stat.displayName}</p>
              <p className="team-ind-stat-item-val">{stat.displayValue}</p>
            </div>
          ))
        }
        </div>
      </div>
    )
  }
};

export default TeamStatItem;
