import React from "react";

const Loading = ({ loaded }) => {
  return (
    <div>
      <p>{loaded ? "Loaded" : "Loading...."}</p>
    </div>
  );
};

export default Loading;
