import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

export class Field extends Component {
  static contextType = LanguageContext;
  render() {
    const labelText = this.context === "english" ? "Name" : "Nome";
    return (
      <div className="ui field">
        <lable>{labelText}</lable>
        <input />
      </div>
    );
  }
}

export default Field;
