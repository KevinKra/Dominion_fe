import React, { Component } from "react";

export default class Lobby extends Component {
  state = {
    username: ""
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ username: value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    // const response = await fetch("http://localhost:3000/api/v1/games/1/players/1");
    // console.log(response.json());
    try {
      const config = {
        method: "POST",
        // headers: {
        //   Accept: "application/json",
        //   "Content-Type": "application/json"
        // },
        body: JSON.stringify({ newPlayer: { name: this.state.username } })
      };
      const response = await fetch("http://localhost:3000/api/v1/games", config);
      if (response.ok) {
        return response.json();
      } else {
        console.log(config.body);
        console.log("hello", response);
      }
    } catch (error) {
      console.log(error);
    }
    this.props.history.push("/current-game");
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor='username'>Username:</label>
          <input type='text' name='username' onChange={e => this.handleChange(e)} />
          <button>START GAME</button>
        </form>
      </div>
    );
  }
}
