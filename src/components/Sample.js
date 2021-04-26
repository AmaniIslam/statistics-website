import React from "react";
import ReactPlayer from "react-player";

function Sample(props) {
  return (
    <>
      <iframe className="vid" src={props.url}></iframe>
    </>
  );
}

export default Sample;
