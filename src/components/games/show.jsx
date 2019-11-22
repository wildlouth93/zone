import React, { Component } from 'react';

// const API_KEY = "aj6w9zffnfngdg8v5gnbfudj";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {},
      loading: true
    };
    this.getGame = this.getGame.bind(this);
  }

  componentDidMount() {
    this.getGame();
  }

  getGame = async() => {
    // let url = "https://api.sportradar.us/nfl/official/trial/v5/en/games/d61dd2c9-6dd2-445c-b635-b04c0aa83b67/boxscore.json?api_key=aj6w9zffnfngdg8v5gnbfudj";
    // let proxyUrl = "http://localhost:3000/";
    // const gameId = "d61dd2c9-6dd2-445c-b635-b04c0aa83b67"

    // const api_call = await fetch(`https://api.sportradar.us/nfl/official/trial/v5/en/games/${gameId}/boxscore.json?api_key=${API_KEY}`, {
    //   mode: 'no-cors',
    //   method: 'GET',
    //   referrerPolicy: 'no-referrer',
    //   // headers: {
    //   //   'Access-Control-Allow-Origin': '*'
    //   // },
    // });
    // window.api_call = api_call;
    const api_call = await fetch('https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/6');
    // fetch(url, { mode: "no-cors" })
    //   .then(response => response.json())
    //   .then(contents => console.log(contents))
      // .catch(() => console.log("Can’t access response."))
    // , 
   

    // , { mode: 'no-cors' })
      // .then(function (response) {
      //   console.log(response);
      // }).catch(function (error) {
      //   console.log('Request failed', error)
      // });
    // debugger;
    const data = await api_call.json();
    console.log(data);
    // debugger;
    // this.setState({ game: data})
  }

  render() {
    return (
      <div>
        <p>{this.state.game.id}</p>
        <p>This is working right now.</p>
        {/* <p>{this.state.game.summary.away.name}</p> */}
      </div>
    )
  }
};

export default Game;
