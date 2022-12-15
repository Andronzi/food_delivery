import React from "react";
import ContentLoader from "react-content-loader";

const DishLoader = () => (
  <ContentLoader
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    height="100vh"
    speed={2}
    width="100vw">
    <rect
      height="40"
      rx="3"
      ry="3"
      width="166"
      x="60"
      y="30"
    />

    <rect
      height="18"
      rx="3"
      ry="3"
      width="147"
      x="60"
      y="75"
    />

    <rect
      height="50"
      rx="3"
      ry="3"
      width="90%"
      x="60"
      y="125"
    />

    <rect
      height="50"
      rx="3"
      ry="3"
      width="90%"
      x="60"
      y="205"
    />

    <rect
      height="50"
      rx="3"
      ry="3"
      width="90%"
      x="60"
      y="285"
    />

    <rect
      height="50"
      rx="3"
      ry="3"
      width="90%"
      x="60"
      y="365"
    />
  </ContentLoader>
);

export default DishLoader;
