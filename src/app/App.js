import "./App.css";
import React from "react";

import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import mainPage from "./layouts/mainPage";
import Movies from "./layouts/movies";

function App() {
  return (
    <Switch>
      <Route path="/movie_page/:movieId?" component={Movies} />
      <Route path="/" exact component={mainPage} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
