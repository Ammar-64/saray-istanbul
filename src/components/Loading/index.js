import React from "react";
import LoadingGIF from "../../img/spinner.gif";
import "./style.css";

const Loading = () => {
  return (
    <div className="loading">
      <img src={LoadingGIF} alt="loading" />
    </div>
  );
};
export default Loading;
