import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import "../css/list.css";

function List({ list, handler }) {
  const removeElement = (e) => {
    const index = e.target.getAttribute("listid");
    let idx = 0;
    const newList = [];
    for (const listElement of list) {
      if (idx != index) {
        newList.push(listElement);
      }
      ++idx;
    }
    handler(newList);
  };
  return (
    <div>
      <ul style={{ padding: "0" }}>
        {list.map((user, index) => {
          return (
            <li key={index}>
              <span className="list" listid={index} onClick={removeElement}>
                <RemoveCircleOutlineIcon className="removeButton" />
                {user}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
