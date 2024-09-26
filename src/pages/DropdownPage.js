import React, { useState } from "react";
import Dropdown from "../components/Dropdown";


function DropdownPage() {
  //creating useState for selecting labels / seting label to null so nothing isn't selected
  const [select, setSelect] = useState(null);

  // the user is selecting options from the object and setting the state
  const handleSelect = (option) => {
    setSelect(option);
  };

  // parent component
  const options = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Yellow", value: "yellow" },
  ];
  return (
    // change selection to value for naming convention and same for onChange

    <div className="flex" >
      <Dropdown options={options} value={select} onChange={handleSelect} />
    </div>
  );
}

export default DropdownPage;
