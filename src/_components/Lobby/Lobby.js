import React, { Component } from "react";
import { createLobby, joinLobby } from "../../_utils/apiCalls";

export default class Lobby extends Component {
  state = {
    username: "",
    gameId: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e, format) => {
    e.preventDefault();
    if (format === "create") createLobby(this.state.username);
    if (format === "join") joinLobby(this.state.username, this.state.gameId);
    this.props.history.push("/current-game");
  };

  render() {
    return (
      <div>
        <section>
          <h2>CREATE A GAME</h2>
          <form onSubmit={e => this.handleSubmit(e, "create")}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              onChange={e => this.handleChange(e)}
            />
            <button>CREATE GAME</button>
          </form>
        </section>
        <section>
          <h2>JOIN A GAME</h2>
          <form onSubmit={e => this.handleSubmit(e, "join")}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              onChange={e => this.handleChange(e)}
            />
            <label htmlFor="gameId">Game Id:</label>
            <input
              type="text"
              name="gameId"
              onChange={e => this.handleChange(e)}
            />
            <button>JOIN GAME</button>
          </form>
        </section>
      </div>
    );
  }
}
