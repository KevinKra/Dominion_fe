import ActionCable from 'actioncable';
// const url = 'https://accession-game-server.herokuapp.com';
const url = 'http://localhost:3000';
let App = {};

export const createLobby = async username => {
  const path = '/api/v1/games';
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ newPlayer: { name: username } })
  };
  try {
    const response = await fetch(url + path, options);
    if (!response.ok) {
      throw new Error('Failed to join lobby.');
    }
    const playerToken = await response.json();
    console.log(playerToken);
    return playerToken;
  } catch (error) {
    throw Error(error.message);
  }
};

export const joinLobby = async (username, gameID, callback) => {
  const path = '/api/v1/join_game';
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ playerName: username, gameId: gameID })
  };
  try {
    const response = await fetch(url + path, options);
    if (!response.ok) {
      throw new Error('Failed to join lobby.');
    }
    const playerToken = await response.json();
    console.log(playerToken);
    return playerToken;
  } catch (error) {
    throw Error(error.message);
  }
};

export const updateGameState = async gameID => {
  const path = `/api/v1/game_state/${gameID}`;
  try {
    const response = await fetch(url + path);
    if (!response.ok) {
      throw new Error('Failed to update game state.');
    }
    const gameState = await response.json();
    return gameState;
  } catch (error) {
    throw Error(error.message);
  }
};

export const updatePlayerState = async (gameID, playerID) => {
  const path = `/api/v1/games/${gameID}/players/${playerID}`;
  try {
    const response = await fetch(url + path);
    if (!response.ok) {
      throw new Error('Failed to update game state.');
    }
    const playerState = await response.json();
    return playerState;
  } catch (error) {
    throw Error(error.message);
  }
};

export const createSubscription = async (playerID, callback) => {
  if (!App.cable) {
    App.cable = ActionCable.createConsumer(
      `${url}/cable?player_id=${playerID}`
    );
  }
  App.cable.subscriptions.create(
    { channel: 'GameStateChannel', player_id: playerID },
    {
      received: callback
    }
  );
  console.log(App.cable);
  // const cable = ActionCable.createConsumer(
  //   `${url}/cable?player_id=${playerID}`
  // );
  // cable.subscriptions.create(
  //   {
  //     channel: 'GameStateChannel',
  //     player_id: playerID
  //   },
  //   { received: callback }
  // );
};
