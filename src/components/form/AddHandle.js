import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import "../../css/form.css";

function AddHandle({ users, setUsers }) {
  const [user, setUser] = useState("");
  const handleUserChange = (event) => {
    setUser(event.target.value);
  };
  const addUser = () => {
    if (user !== "") {
      setUsers([...users, user]);
      setUser("");
    }
  };
  const enterHandler = (e) => {
    if (e.key === "Enter") addUser();
  };
  return (
    <div className="formDiv">
      <label>Add Codeforces handles</label>
      <input
        type="text"
        value={user}
        onChange={handleUserChange}
        onKeyDown={enterHandler}
      />
      <AddCircleOutlineIcon onClick={addUser} className="addButton" />
    </div>
  );
}

export default AddHandle;
