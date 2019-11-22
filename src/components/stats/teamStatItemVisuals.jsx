import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import PieChart from '../charts/pieChart';
import BarChart from '../charts/barChart';


class TeamStatItemVisuals extends Component {

  render() {
    // console.log(this.props);
    let chart;
    let chart2;
    let chart3;
    let chart4;

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

    if (this.props.displayName === "Rushing") {
      let rushingTds = this.props.stats[1].value;
      let passingTds = this.props.stats[11].value - this.props.stats[1].value;
      let data2 = [rushingTds, passingTds];
      let backgroundColor = ['blue', 'orange'];
      let labels = [`R${this.props.stats[1].abbreviation}`, "N-RYDS"]
      let label = "Rush Yds/Total Yds.";
      chart = <div className="team-stat-item-pie">
        <p>{label}</p>
        <PieChart data={data2} backgroundColor={backgroundColor} labels={labels} label={label} />
      </div>
    }

    if (this.props.displayName === "Receiving") {
      let recYac = this.props.stats[10].value;
      let recYds = this.props.stats[2].value - this.props.stats[10].value;
      let data2 = [recYac, recYds];
      let backgroundColor = ['blue', 'orange'];
      let labels = [this.props.stats[10].abbreviation, "N-YAC"]
      let label = "YAC/Receiving Yds.";
      chart = <div className="team-stat-item-pie">
        <p>{label}</p>
        <PieChart data={data2} backgroundColor={backgroundColor} labels={labels} label={label} />
      </div>
    }

    if (this.props.displayName === "Miscellaneous") {
      let dataA = this.props.stats[4].value;
      let dataB = this.props.stats[5].value - this.props.stats[4].value;
      let data2 = [dataA, dataB];
      let backgroundColor = ['green', 'red'];
      let labels = [this.props.stats[4].abbreviation, "FAILS"]
      let label = "3rd Down Conv./Attempts";
      chart3 = <div className="team-stat-item-pie">
        <p>{label}</p>
        <PieChart data={data2} backgroundColor={backgroundColor} labels={labels} label={label} />
      </div>
    }

    if (this.props.displayName === "Miscellaneous") {
      let dataA = this.props.stats[7].value;
      let dataB = this.props.stats[8].value - this.props.stats[7].value;
      let data2 = [dataA, dataB];
      let backgroundColor = ['green', 'red'];
      let labels = [this.props.stats[7].abbreviation, "FAILS"]
      let label = "4th Down Conv./Attempts";
      chart4 = <div className="team-stat-item-pie">
        <p>{label}</p>
        <PieChart data={data2} backgroundColor={backgroundColor} labels={labels} label={label} />
      </div>
    }

    if (this.props.displayName === "Miscellaneous") {
      let dataA = this.props.stats[17].value;
      let dataB = this.props.stats[18].value;
      let data2 = [dataA, dataB];
      let backgroundColor = ['green', 'red'];
      let labels = [this.props.stats[17].abbreviation, this.props.stats[18].abbreviation]
      let label = "Takeaways/Giveaways";
      chart2 = <div className="team-stat-item-pie">
        <p>{label}</p>
        <PieChart data={data2} backgroundColor={backgroundColor} labels={labels} label={label} />
      </div>
    }

    if (this.props.displayName === "Miscellaneous") {
      let dataA = this.props.stats[14].value;
      let dataB = this.props.stats[15].value;
      let dataC = this.props.stats[16].value;
      let data2 = [dataA, dataB, dataC];
      let backgroundColor = ['red', 'blue', 'yellow'];
      let labels = [this.props.stats[14].abbreviation, "EFF%", this.props.stats[16].abbreviation]
      let label = "RedZone Offense";
      chart = <div className="team-stat-item-pie">
        <p>{label}</p>
        <BarChart data={data2} backgroundColor={backgroundColor} labels={labels} label={label} />
      </div>
    }

    if (this.props.displayName === "Defensive") {
      let dataA = this.props.stats[3].value;
      let dataB = this.props.stats[5].value;
      let dataC = this.props.stats[6].value;
      let dataD = this.props.stats[11].value;
      let data2 = [dataA, dataB, dataC, dataD];
      let backgroundColor = ['red', 'blue', 'yellow', "orange"];
      let labels = [this.props.stats[3].abbreviation, this.props.stats[5].displayName, this.props.stats[6].abbreviation, this.props.stats[11].abbreviation]
      let label = "Defensive Key Stats";
      chart = <div className="team-stat-item-pie">
        <p>{label}</p>
        <BarChart data={data2} backgroundColor={backgroundColor} labels={labels} label={label} />
      </div>
    }

    if (this.props.displayName === "Defensive Interceptions") {
      let dataA = this.props.stats[0].value;
      let dataB = this.props.stats[1].value / this.props.stats[0].value;
      let data2 = [dataA, dataB];
      let backgroundColor = ['blue', 'orange'];
      let labels = [this.props.stats[0].abbreviation, "YD/INT"]
      let label = "Interception/Avg Return Yards";
      chart = <div className="team-stat-item-pie">
        <p>{label}</p>
        <BarChart data={data2} backgroundColor={backgroundColor} labels={labels} label={label} />
      </div>
    }

    if (this.props.displayName === "General") {
      let dataA = this.props.stats[1].value;
      let dataB = this.props.stats[2].value;
      let data2 = [dataA, dataB];
      let backgroundColor = ['green', 'red'];
      let labels = [this.props.stats[1].abbreviation, this.props.stats[2].abbreviation]
      let label = "Forced Fumbles/Fumbles Recovered";
      chart = <div className="team-stat-item-pie">
        <p>{label}</p>
        <PieChart data={data2} backgroundColor={backgroundColor} labels={labels} label={label} />
      </div>
    }


    if (this.props.displayName === "Returning") {
      let dataA = this.props.stats[2].value;
      let dataB = this.props.stats[7].value;
      let data2 = [dataA, dataB];
      let backgroundColor = ['blue', 'orange'];
      let labels = [`KR-${this.props.stats[2].abbreviation}`, `PR-${this.props.stats[7].abbreviation}`]
      let label = "KR/PR AVG Yards";
      chart = <div className="team-stat-item-pie">
        <p>{label}</p>
        <BarChart data={data2} backgroundColor={backgroundColor} labels={labels} label={label} />
      </div>
    }

    if (this.props.displayName === "Kicking") {
      let dataA = this.props.stats[0].value;
      let dataB = this.props.stats[1].value - this.props.stats[0].value;
      let data2 = [dataA, dataB];
      let backgroundColor = ['green', 'red'];
      let labels = [this.props.stats[0].abbreviation, "MISSES"]
      let label = "Field Goals";
      chart = <div className="team-stat-item-pie">
        <p>{label}</p>
        <PieChart data={data2} backgroundColor={backgroundColor} labels={labels} label={label} />
      </div>
    }


    if (this.props.displayName === "Kicking") {
      let dataA = this.props.stats[10].value;
      let dataB = this.props.stats[11].value - this.props.stats[10].value;
      let data2 = [dataA, dataB];
      let backgroundColor = ['green', 'red'];
      let labels = [this.props.stats[0].abbreviation, "MISSES"]
      let label = "Extra Points";
      chart2 = <div className="team-stat-item-pie">
        <p>{label}</p>
        <PieChart data={data2} backgroundColor={backgroundColor} labels={labels} label={label} />
      </div>
    }

    if (this.props.displayName === "Punting") {
      let dataA = this.props.stats[3].value;
      let dataB = this.props.stats[4].value;
      let data2 = [dataA, dataB];
      let backgroundColor = ['blue', 'orange'];
      let labels = [`${this.props.stats[3].abbreviation}`, `${this.props.stats[4].abbreviation}`]
      let label = "Punting Average";
      chart = <div className="team-stat-item-pie">
        <p>{label}</p>
        <BarChart data={data2} backgroundColor={backgroundColor} labels={labels} label={label} />
      </div>
    }

    if (this.props.displayName === "Scoring") {
      let dataA = this.props.stats[0].value;
      let dataB = this.props.stats[1].value;
      let dataC = this.props.stats[2].value;
      let dataD = this.props.stats[4].value;
      let data2 = [dataA, dataB, dataC, dataD];
      let backgroundColor = ['red', 'blue', 'yellow', "orange"];
      let labels = [this.props.stats[0].abbreviation, this.props.stats[1].abbreviation, this.props.stats[2].abbreviation, this.props.stats[4].abbreviation]
      let label = "Scoring Overview";
      chart = <div className="team-stat-item-pie">
        <p>{label}</p>
        <BarChart data={data2} backgroundColor={backgroundColor} labels={labels} label={label} />
      </div>
    }




    // chart = <div>
    //   <PieChart />
    // </div>
    console.log(this.props)
  

    return (
      <div className="team-stat-visual-dropdown">
        {chart}
        {chart2}
        {chart3}
        {chart4}
      </div>
    )
  }
};

export default TeamStatItemVisuals;