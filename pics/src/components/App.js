import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: [],
    totalImgs: 0
  };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term
      }
    });

    this.setState({
      images: response.data.results,
      totalImgs: response.data.total
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearch={this.onSearchSubmit} />
        Showing {this.state.images.length} of a total of: {this.state.totalImgs}{" "}
        images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
