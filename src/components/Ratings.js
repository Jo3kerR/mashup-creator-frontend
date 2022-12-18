import React from "react";
import List from "./List";

import "../css/handlesAndRatings.css";

function Ratings({ list, handler }) {
  return (
    <div className="col-3 text">
      <h2 style={{ pointerEvents: "none" }}>Ratings</h2>
      <List list={list} handler={handler} />
    </div>
  );
}

export default Ratings;
