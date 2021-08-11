import React from "react";
import { Button } from "../lib/index.js";

export default function Buttons() {
  return (
    <div>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="default">Default</Button>
      <Button disabled>Disabled</Button>
      <Button isLoading>Disabled loading</Button>
    </div>
  );
}
