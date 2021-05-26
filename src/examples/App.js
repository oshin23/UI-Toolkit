import React from "react";
import { TextInput, Button } from "../lib/index.js";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>

    <h3>1. Input text with placeholder</h3>
    <TextInput placeholder="Text input placeholder.." />

    <h3>2. Input text with label </h3>
    <TextInput name="email" label="Email" placeholder="Enter your email" />

    <h3>3. Invalid/Required Input field </h3>
    <TextInput
      label="Email"
      placeholder="Enter your email"
      helpText="This field is required"
    />

    <h3>4. Disabled Input field </h3>
    <TextInput disabled />

    <hr />
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="default">Default</Button>
    <Button disabled>Disabled</Button>
    <Button isLoading>Disabled loading</Button>
  </div>
);

export default App;
