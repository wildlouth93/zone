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
            <div key={i}>
              <p>{stat.displayName}</p>
              <p>{stat.displayValue}</p>
            </div>
          ))
        }
        </div>
      </div>
    )
  }
};

export default TeamStatItem;
