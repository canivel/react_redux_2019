import React from "react";

class VideoList extends React.Component {
  render() {
    console.log(this.props.videos);
    return <div>{this.props.videos.length}</div>;
  }
}

export default VideoList;
