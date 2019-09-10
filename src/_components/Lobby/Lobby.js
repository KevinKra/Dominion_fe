import React, { Component } from "react";
import { createLobby } from "../../_utils/apiCalls";

export default class Lobby extends Component {
  state = {
    username: ""
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ username: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    //should create a game object with the user's name
    //should update the game store object with the id of the current game
    createLobby(this.state.username);
    //should route to new page
    this.props.history.push("/current-game");
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            onChange={e => this.handleChange(e)}
          />
          <button>START GAME</button>
        </form>
      </div>
    );
  }
}
