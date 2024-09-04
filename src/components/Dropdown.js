import React from "react";
import { useState } from "react";
function Dropdown({ options, select, onSelect }) {


  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  const handleClickOptions = (options) => {
    // close down dropbown
    setOpen(false)
    onSelect(options)
  }

  const renderOptions = options.map((options) => {
    return <div key={options.value}>{options.label}</div>;
  });

  let content = 'select...'
  if(select){
    content = content.label
  }

  return (
    <div>
      <div onClick={handleClick}>{content}</div>
      { open && <div>{renderOptions}</div>}
    </div>
  );
}

export default Dropdown;
