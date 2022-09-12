import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";
import Game from "./Game";
import Play from "./Play";
// import Play2 from "./Play2";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/play" component={Play} />
        {/* <Route path="/play2" component={Play2} /> */}
      </Switch>
    </BrowserRouter>
  )
}