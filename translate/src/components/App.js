import React, { Component } from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

export class App extends Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language: language });
  };

  render() {
    return (
      <div className="ui container">
        <h1>Translate App</h1>
        <div>
          <b>Select a language:</b>
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag br"
            onClick={() => this.onLanguageChange("portuguese")}
          />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
