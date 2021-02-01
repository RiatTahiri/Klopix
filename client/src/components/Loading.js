import React from "react";

const Loading = ({ loaded }) => {
  return (
    <div>
      <p>{loaded ? <h3>Loaded</h3> : <h3>Loading.....</h3>}</p>
    </div>
  );
};

export default Loading;
