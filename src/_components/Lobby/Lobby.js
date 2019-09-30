import React, { Component } from "react";
import { connect } from "react-redux";
import { createLobby, joinLobby, createSubscription } from "../../_utils/apiCalls";
import ScrollLock from "react-scrolllock";
import { Link } from "react-scroll";
import * as actions from "../../_redux/actions";
import "./Lobby.scss";

export class Lobby extends Component {
  state = {
    username: "",
    gameId: "",
    error: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event, format) => {
    const { username, gameId } = this.state;
    const { initiatePlayer } = this.props;
    event.preventDefault();
    try {
      if (format === "create") {
        const hostToken = await createLobby(username);
        await createSubscription(hostToken.playerID, data => {
          console.log(data);
        });
        initiatePlayer(hostToken.gameId, hostToken.playerId, hostToken.playerName);
      }
      if (format === "join") {
        const memberToken = await joinLobby(username, gameId);
        await createSubscription(memberToken.playerId, data => {
          console.log(data);
        });
        initiatePlayer(memberToken.gameId, memberToken.playerId, memberToken.playerName);
      }
      this.setState({ error: "" });
      this.props.history.push("/current-game");
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  render() {
    return (
      <ScrollLock>
        <div className='Lobby'>
          <section className='splash-section'>
            <div className='splash-text'>
              <h1>Accession Online</h1>
              <p>-- A Deck Building Card Game --</p>
              <Link to='start-section' smooth={true} duration={800} isDynamic={true}>
                <button onClick={this.handleScroll}>Begin</button>
              </Link>
            </div>
          </section>
          <section className='start-section'>
            <div className='lobby-image'></div>
            <section className='game-options'>
              <h1>Start A Game</h1>
              <section className='start-option'>
                {this.state.error && <p>{this.state.error}</p>}
                <h2>CREATE A GAME</h2>
                <form onSubmit={event => this.handleSubmit(event, "create")}>
                  <label htmlFor='username'>Username:</label>
                  <input
                    type='text'
                    name='username'
                    required
                    minLength='3'
                    maxLength='10'
                    autoComplete='off'
                    onChange={e => this.handleChange(e)}
                  />
                  <button>CREATE GAME</button>
                </form>
              </section>
              <section className='start-option'>
                <h2>JOIN A GAME</h2>
                <form onSubmit={e => this.handleSubmit(e, "join")}>
                  <label htmlFor='username'>Username:</label>
                  <input
                    type='text'
                    required
                    name='username'
                    minLength='3'
                    maxLength='10'
                    autoComplete='off'
                    onChange={e => this.handleChange(e)}
                  />
                  <label htmlFor='gameId'>Game Id:</label>
                  <input
                    type='number'
                    required
                    name='gameId'
                    autoComplete='off'
                    onChange={e => this.handleChange(e)}
                  />
                  <button>JOIN GAME</button>
                </form>
              </section>
              <Link to='splash-section' smooth={true} isDynamic={true}>
                <button onClick={this.handleScroll}>Back</button>
              </Link>
            </section>
          </section>
        </div>
      </ScrollLock>
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
