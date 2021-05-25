import React from "react";
import { TextInput, Button } from "../lib/index.js";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <TextInput label="Email Address" placeholder="name@example.com" />
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="default">Default</Button>
    <Button disabled>Disabled</Button>
    <Button isLoading>Disabled loading</Button>
  </div>
);

export default App;
