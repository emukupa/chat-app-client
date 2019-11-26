import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ChatRoom from './components/ChatRoom/ChatRoom';
import Navigation from "./components/Navigation/Navigation";

import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/chat-room" component={ChatRoom} />
      </Switch>
    </div>
  );
}

export default App;
