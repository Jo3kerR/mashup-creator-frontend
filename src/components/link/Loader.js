import React, { Fragment } from "react";
import Animation from "../../image/loading-gif.gif";

const Loader = () => (
  <Fragment>
    <img src={Animation} className="loader" />
  </Fragment>
);

export default Loader;
