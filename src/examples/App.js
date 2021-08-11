import React from "react";
import ButtonComponent from "./Buttons";
import InputComponent from "./TextInput";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => (
  <Router>
    <div style={{ width: 640, margin: "15px auto" }}>
      <h1>React Components</h1>

      <nav>
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <Link to="/button">Button</Link>
          </li>
          <li>
            <Link to="/input">Input</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/input">
          <InputComponent />
        </Route>
        <Route path="/button">
          <ButtonComponent />
        </Route>
        {/* <Route path="/">
            <Home />
          </Route> */}
      </Switch>
    </div>
  </Router>
);

export default App;
