const url = 'http://accession-game-server.herokuapp.com';
const localUrl = 'http://localhost:3000';

export const createLobby = async username => {
  const path = '/api/v1/games';
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ newPlayer: { name: username } })
  };
  try {
    const response = await fetch(localUrl + path, options);
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

export const joinLobby = async (username, gameId) => {
  const path = '/api/v1/join_game';
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ playerName: username, gameId: gameId })
  };
  try {
    const response = await fetch(localUrl + path, options);
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

export const updateGameState = async gameId => {
  const path = `/api/v1/game_state/${gameId}`;
  try {
    const response = await fetch(localUrl + path);
    if (!response.ok) {
      throw new Error('Failed to update game state.');
    }
    const gameState = await response.json();
    return gameState;
  } catch (error) {
    throw Error(error.message);
  }
};

export const updatePlayerState = async (gameId, playerId) => {
  const path = `/api/v1/games/${gameId}/players/${playerId}`;
  try {
    const response = await fetch(localUrl + path);
    if (!response.ok) {
      throw new Error('Failed to update game state.');
    }
    const playerState = await response.json();
    return playerState;
  } catch (error) {
    throw Error(error.message);
  }
};
