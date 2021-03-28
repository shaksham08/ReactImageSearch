import React from "react";

class Images extends React.Component {
  render() {
    const images = this.props.images.map((image) => (
      <img src={image.urls.regular}></img>
    ));
    return <h1>{images}</h1>;
  }
}

export default Images;
