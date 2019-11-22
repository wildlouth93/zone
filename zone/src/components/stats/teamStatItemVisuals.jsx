import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import PieChart from '../charts/pieChart';


class TeamStatItemVisuals extends Component {

  render() {
    // console.log(this.props);
    let chart;
    let chart2;
    if (this.props.displayName === "Passing") {
      let completions = this.props.stats[1].value;
      let incompletions = this.props.stats[7].value - this.props.stats[1].value;
      let data2 = [completions, incompletions];
      let backgroundColor = ['green', 'red'];
      let labels = [this.props.stats[1].shortDisplayName, "INC"]
      let label = "Completion Percentage";
      chart2 = <div className="team-stat-item-pie">
        <p>{label}</p>
        <PieChart data={data2} backgroundColor={backgroundColor} labels={labels} label={label} />
      </div>
    }

    if (this.props.displayName === "Passing") {
      let touchdowns = this.props.stats[9].value;
      let interceptions = this.props.stats[3].value;
      let data2 = [touchdowns, interceptions];
      let backgroundColor = ['green', 'red'];
      let labels = ["TDs", this.props.stats[3].shortDisplayName]
      let label = "Touchdown-Int";
      chart = <div className="team-stat-item-pie">
        <p>{label}</p>
        <PieChart data={data2} backgroundColor={backgroundColor} labels={labels} label={label} />
      </div>
    }


    // chart = <div>
    //   <PieChart />
    // </div>

    return (
      <div className="team-stat-visual-dropdown">
        {chart}
        {chart2}
      </div>
    )
  }
};

export default TeamStatItemVisuals;