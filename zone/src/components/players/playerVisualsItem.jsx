import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import PlayerVisualsInnerItem from './playerVisualsInnerItem';
import PlayerVisSplitCat from './playerVisSplitCat';

class PlayerVisualsItem extends Component {
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
    // console.log(this.props.stats);
    // console.log(this.props.labels);
    // console.log(this.props.num);

    let content;



    if (this.state.opened) {
      content = <div>
        {this.props.stats.splitCategories.map((category, i) => (
          <PlayerVisSplitCat category={category} labels={this.props.labels} splits={category.splits} num={this.props.num} key={i}/>
        ))
        }
        {/* <h2 className="player-dd-header-special" onClick={this.handleOpenToggle}><i className="dd-arrow-up"></i></h2> */}
      </div>
    } else {
      // content = <div className="player-dd-special"><h2 className="player-dd-header" onClick={this.handleOpenToggle}><i className="dd-arrow-down"></i></h2></div>
      content = <div>
        {this.props.stats.splitCategories.map((category, i) => (
          <div className="player-split-category" key={i} >
            <div className="player-profile-dd-headings-3">
              <p onClick={this.handleOpenToggle}>{category.name} <i className="dd-arrow-down"></i></p>
            </div>
            {/* <PlayerVisualsInnerItem labels={this.props.labels} splits={category.splits} num={this.props.num} opened={false}/> */}
          </div>
        ))
        }
        {/* <h2 className="player-dd-header-special" onClick={this.handleOpenToggle}><i className="dd-arrow-up"></i></h2> */}
      </div>
    }



    return (
      // <div>
      //   {this.props.stats.splitCategories.map((category, i) => (
      //     <div key={i} >
      //       <p>{category.name}</p>
      //       <PlayerVisualsInnerItem labels={this.props.labels} splits={category.splits} num={this.props.num} />

      //       {/* <PlayerVisualsItem stats={this.props.stats} labels={this.props.labels} /> */}
      //     </div>
      //   ))
      //   }
      // </div>
      <div>
        {content}
      </div>
    )
  }
}

export default PlayerVisualsItem;