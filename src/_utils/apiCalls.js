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
