import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Select } from "evergreen-ui";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold color-emerald-300 underline">ASF</h1>
      <Select>
        <option value="blah" />
      </Select>
    </div>
  );
}

export default App;
