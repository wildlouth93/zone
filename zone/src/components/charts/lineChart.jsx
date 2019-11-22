import React from "react";
import Chart from "chart.js";

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");
    // const data = [25, 25, 50];
    // const data = [this.props.fat, this.props.carb, this.props.protein];
    const data = this.props.data;
    const borderColor = this.props.backgroundColor;
    const labels = this.props.labels;
    const label = this.props.label;

    new Chart(myChartRef, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: label,
            data,
            borderColor: borderColor
          }
        ]
      },
      options: {
        responsive: true,
        legend: {
          display: false,
          labels: {
            usePointStyle: true,
            fontColor: "red"
          },
          fontColor: "red"
        },
        labels: {
          fontColor: "red"
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fontColor: "red"
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: "red"
            },
            // labels: {
            //   fontColor: "red"
            // }
          }]
        }
      }
    });
  }

  render() {
    return <canvas id="myChart2" ref={this.chartRef} />;
  }
}

export default LineChart;

