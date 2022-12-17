import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import "../../css/form.css";

function AddRating({ ratings, setRatings }) {
  const [rating, setRating] = useState(800);
  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };
  const addRating = () => {
    if (ratings.length < 26) {
      setRatings([...ratings, parseInt(rating)]);
    }
  };
  const enterHandler = (e) => {
    if (e.key === "Enter") addRating();
  };
  return (
    <div className="formDiv">
      <label>Add problem ratings (max 26)</label>
      <select
        value={rating}
        onChange={handleRatingChange}
        onKeyDown={enterHandler}
      >
        <option value="800">800</option>
        <option value="900">900</option>
        <option value="1000">1000</option>
        <option value="1200">1200</option>
        <option value="1300">1300</option>
        <option value="1400">1400</option>
        <option value="1500">1500</option>
        <option value="1600">1600</option>
        <option value="1700">1700</option>
        <option value="1800">1800</option>
        <option value="1900">1900</option>
        <option value="2000">2000</option>
        <option value="2100">2100</option>
        <option value="2200">2200</option>
        <option value="2300">2300</option>
        <option value="2400">2400</option>
        <option value="2500">2500</option>
        <option value="2600">2600</option>
        <option value="2700">2700</option>
        <option value="2800">2800</option>
        <option value="2900">2900</option>
        <option value="3000">3000</option>
        <option value="3200">3200</option>
        <option value="3300">3300</option>
        <option value="3400">3400</option>
        <option value="3500">3500</option>
      </select>
      <AddCircleOutlineIcon onClick={addRating} className="addButton" />
    </div>
  );
}

export default AddRating;
