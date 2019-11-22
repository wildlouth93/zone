import React from "react";
import Chart from "chart.js";

class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");
    // const data = [25, 25, 50];
    // const data = [this.props.fat, this.props.carb, this.props.protein];
    const data = this.props.data;
    const backgroundColor = this.props.backgroundColor;
    const labels = this.props.labels; 
    const label = this.props.label;
    new Chart(myChartRef, {
      type: "pie",
      data: {
        labels: labels,
        datasets: [
          {
            label: label,
            data,
            backgroundColor: backgroundColor,
            color: "white"
          }
        ]
      },
      options: {
        responsive: true,
        legend: {
          position: "right",
          labels: {
            usePointStyle: true,
            fontColor: "white"
          }
        }
      }
    });
  }

  render() {
    return <canvas id="myChart" ref={this.chartRef} />;
  }
}

export default PieChart;