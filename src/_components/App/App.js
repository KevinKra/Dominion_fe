import React from "react";
import Lobby from "../Lobby/Lobby";
import { Route } from "react-router-dom";
import GamePage from "../GamePage/GamePage";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={Lobby} />
      <Route exact path='/current-game' component={GamePage} />
    </div>
  );
}

export default App;
