import React from "react";
import "./style.css";

// The Thumbnail component renders a div that uses some CSS to render a background image
// It will always keep square proportions at any size without the image warping
// The "role" and "aria label" are there to identify the element's purpose as an image for accessibility purposes
function Thumbnail({ src }) {
  return (
    <div
      className="thumbnail"
      role="img"
      aria-label="Recipe Image"
      style={{
      backgroundImage: `url(${src})`
      }}
    />
  );
}

export default Thumbnail;