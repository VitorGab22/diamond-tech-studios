import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";
import Game from "./Game";
import Play from "./Play";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/play" component={Play} />
      </Switch>
    </BrowserRouter>
  )
}