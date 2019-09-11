export const createLobby = async username => {
  const url = "http://localhost:3000";
  const path = "/api/v1/games";
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ newPlayer: { name: username } })
  };
  try {
    const response = await fetch(url + path, options);
    if (!response.ok) {
      throw new Error("Failed to join lobby.");
    }
    const playerToken = await response.json();
    console.log(playerToken);
    return playerToken;
  } catch (error) {
    throw Error(error.message);
  }
};

export const updateGameState = async gameID => {
  const url = "http://localhost:3000";
  const path = `api/v1/game_state/${gameID}`;
  try {
    const response = await fetch(url + path);
    if (!response.ok) {
      throw new Error("Failed to update game state.");
    }
    const gameState = await response.json();
    return gameState;
  } catch (error) {
    throw Error(error.message);
  }
};
