import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [] };

  onSearchSubmit = async query => {
    const res = await youtube.get("/search", {
      params: {
        q: query
      }
    });
    //console.log(response.data.items);
    this.setState({ videos: res.data.items });
  };
  render() {
    return (
      <div>
        <div className="ui container">
          <SearchBar onSearchSubmit={this.onSearchSubmit} />
          Found {this.state.videos.length} videos!
          <VideoList videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;
