import React from "react";
import { TextInput } from "../lib/components/inputFields/";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <TextInput label="Email Address" placeholder="name@example.com" />
    {/* <Button variant="success">Submit</Button> */}
  </div>
);

export default App;
