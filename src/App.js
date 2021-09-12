import React from "react";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";
import About from "./Pages/About";
import Contact1 from "./Pages/Contact";
import Services1 from "./Pages/Services";
import Error from "./Pages/Error";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact1}></Route>
        <Route path="/services" component={Services1}></Route>
        <Route component={Error}></Route>
      </Switch>
    </>
  );
};

export default App;
