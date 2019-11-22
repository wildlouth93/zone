import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import BarChart from '../charts/barChart';
import LineChart from '../charts/lineChart';

class PlayerVisualsInnerItem extends Component {
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
    // console.log(this.props.splits);
    // console.log(this.props.labels);
    // console.log(this.props.num);

    let chart;

  
    // this.props.splits.map((split, i) => (
    //   console.log(split.displayName)
    // ))
    let backgroundColor = ['green', 'white', 'red'];
    // let labels = ['All Splits', 'Home', 'Away'];
    // let data2 = [25, 50, 75];
    let labels = [];
    let data2 = [];
    let label = this.props.labels[this.props.num];

    this.props.splits.map((split, i) => (
      data2[i] = split.stats[this.props.num],
      labels[i] = split.displayName
    ))

    if (this.props.splits.length === 2) {
      backgroundColor = ['green', 'white']
    }

    if (this.props.splits.length === 1) {
      backgroundColor = [
        'white'
      ]
    }

    if (this.props.splits.length > 3) {
      chart = <div className="player-stat-item-line">
        <LineChart data={data2} borderColor={backgroundColor} labels={labels} label={label} />
      </div>
    } else {
      chart = <div className="player-stat-item-bar">
        <BarChart data={data2} backgroundColor={backgroundColor} labels={labels} label={label} />
      </div>
    }

   

    let content;

    if (this.state.opened) {
      content = <div className="player-inner-nest">
        {/* {this.props.splits.map((split, i) => (
          <div key={i}>
            <p>{split.displayName}</p>
            <p>{split.stats[this.props.num]}</p>
          </div>
        ))} */}
        {chart}
        <div><h2 className="player-dd-header" onClick={this.handleOpenToggle}><i className="dd-arrow-up"></i></h2></div>
      </div>
    } else {
      content = <div></div>
      // content = <div className="player-inner-nest"><h2 className="player-dd-header" onClick={this.handleOpenToggle}><i className="dd-arrow-down"></i></h2></div>
    }

    return (
      <div>
        {content}
        <br></br>
        {/* {chart} */}
      </div>
    )
  }
}

export default PlayerVisualsInnerItem;