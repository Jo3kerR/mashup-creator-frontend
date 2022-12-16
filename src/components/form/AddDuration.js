import React from "react";

import "../../css/form.css";

function AddDuration({ duration, setDuration }) {
  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };
  return (
    <div className="formDiv">
      <label>Enter duration (in mins): </label>
      <input type="text" value={duration} onChange={handleDurationChange} />
    </div>
  );
}

export default AddDuration;
