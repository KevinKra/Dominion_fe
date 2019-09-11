import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../_redux/actions";
import { createLobby, joinLobby } from "../../_utils/apiCalls";

export class Lobby extends Component {
  state = {
    username: "",
    gameId: "",
    error: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event, format) => {
    const { username, gameId } = this.state;
    const { initiatePlayer } = this.props;
    event.preventDefault();
    try {
      if (format === "create") {
        const hostToken = await createLobby(username);
        initiatePlayer(
          hostToken.gameId,
          hostToken.playerId,
          hostToken.playerName
        );
      }
      if (format === "join") {
        const memberToken = await joinLobby(username, gameId);
        initiatePlayer(
          memberToken.gameId,
          memberToken.playerId,
          memberToken.playerName
        );
      }
      this.setState({ error: "" });
      this.props.history.push("/current-game");
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  render() {
    return (
      <div>
        <section>
          {this.state.error && <p>{this.state.error}</p>}
          <h2>CREATE A GAME</h2>
          <form onSubmit={event => this.handleSubmit(event, "create")}>
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

export const mapDispatchToProps = dispatch => ({
  initiatePlayer: (gameID, playerID, playerName) =>
    dispatch(actions.initiatePlayer(gameID, playerID, playerName))
});

export default connect(
  null,
  mapDispatchToProps
)(Lobby);
