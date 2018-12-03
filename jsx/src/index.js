import React from "react";
import ReactDOM from "react-dom";

function getTime() {
  return new Date().toLocaleDateString();
}

//create a react component
const App = () => {
  const buttonText = "Click Me!";

  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Name
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText}
      </button>
      <hr />
      <h2>The date is: {getTime()}</h2>
    </div>
  );
};

//render the react component
ReactDOM.render(<App />, document.querySelector("#root"));
