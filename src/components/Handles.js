import React from "react";
import List from "./List";

import "../css/handlesAndRatings.css";

function Handles({ list, handler }) {
  return (
    <div className="col-3 text">
      Handles
      <List list={list} handler={handler} />
    </div>
  );
}

export default Handles;
