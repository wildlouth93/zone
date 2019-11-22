import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import BarChart from '../charts/barChart';


class OppTeamStatItem extends Component {


  render() {
    // console.log(this.props);
    // console.log(this.props.stats);
    // console.log(this.props.teamStats);
    // console.log(this.props.stats);

    let backgroundColor = ["green", "red"];
    
    return (
      <div className="team-stat-item-dropdown">
        <div>
          {
            this.props.stats.map((stat, i) => {

              let barChart;
              let data = [this.props.teamStats[i].value, stat.value];
              let label = stat.displayName;
              let label1 = `Team ${stat.abbreviation}`;
              let label2 = `Opp. ${stat.abbreviation}`;
              let labels = [label1, label2];

              if ((this.props.teamStats[i].value) && (stat.value)) {
                barChart = <div className="opp-comp-stats">
                  <p>{stat.displayName}</p>
                  <BarChart data={data} label={label} labels={labels} backgroundColor={backgroundColor} />
                </div>
              } else {
                barChart = <div></div>
              }

              console.log(data);
              return (
              <div key={i}>
                
                {/* <p>{stat.displayValue}</p>
                <p>{this.props.teamStats[i].displayName}</p>
                <p>{this.props.teamStats[i].displayValue}</p> */}
                {/* <BarChart data={data} label={label} labels={labels} backgroundColor={backgroundColor} /> */}
                {barChart}
              </div>
              )
          })
          }
        </div>
      </div>
    )
  }
};

export default OppTeamStatItem;

