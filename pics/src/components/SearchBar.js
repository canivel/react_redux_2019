import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onSubmitSearch = event => {
    event.preventDefault();
    this.props.onSearch(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSubmitSearch}>
          <div className="field">
            <label>Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
        <div>{this.state.term}</div>
      </div>
    );
  }
}

export default SearchBar;
