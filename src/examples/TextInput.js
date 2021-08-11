import React from "react";
import { TextInput } from "../lib/index.js";

export default function TextInputComponent() {
  return (
    <div>
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
    </div>
  );
}
