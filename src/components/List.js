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
            <li
              key={index}
              onClick={removeElement}
              listid={index}
              className="list"
            >
              <RemoveCircleOutlineIcon className="removeButton" />
              {user}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
