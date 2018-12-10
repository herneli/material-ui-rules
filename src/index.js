import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./lib/HelloWorld";

function App(props) {
  return <HelloWorld name="Jordi" />;
}

ReactDOM.render(<App />, document.getElementById("root"));
