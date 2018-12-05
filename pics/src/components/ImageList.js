import React from "react";

class ImageList extends React.Component {
  render() {
    const images = this.props.images.map(image => {
      return (
        <img key={image.id} src={image.urls.thumb} alt={image.description} />
      );
    });
    return <div className="ui segment">{images}</div>;
  }
}

export default ImageList;
