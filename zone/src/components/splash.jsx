import React from 'react';
import {HashRouter, Link} from 'react-router-dom';
class Splash extends React.Component {

  render() {
    return (
      <div className="splash-container">
        {/* <img src="splash.jpg" alt="" /> */}
        <div className="splash-heading">
          <h1>The Zone</h1>
          <h2>A new place to track your favorite NFL Teams and Players.</h2>
        </div>
        <div className="splash-btn">
          <HashRouter><Link to="/zone"><h1>Get in the Zone</h1></Link></HashRouter>
        </div>
      </div>
    )
  }

}

export default Splash;