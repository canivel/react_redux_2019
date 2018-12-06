import React from "react";

class SearchBar extends React.Component {
  state = { query: "" };

  onChangeQuery = event => {
    this.setState({ query: event.target.value });
  };

  onSubmitSearchForm = event => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.query);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onSubmitSearchForm}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              onChange={this.onChangeQuery}
              value={this.state.query}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
