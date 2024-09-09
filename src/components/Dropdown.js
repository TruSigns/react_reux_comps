import React from "react";
import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";
function Dropdown({ options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const divEl = useRef()

  // creating a useEffect for event listeing to the dropdown click

  useEffect(() => {
    const handler = (e) => {
      //listening to the event target
      if(!divEl.current.contains(e.target)){
       setOpen(false)
      }
    };
    //need to add the document event listener with three arguments
    document.addEventListener("click", handler, true);

    //cleanup
    return () => {
      // removing the event lister that required two argument.
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickOptions = (options) => {
    // close down dropbown
    setOpen(false);
    onChange(options);
  };

  const renderOptions = options.map((options) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleClickOptions(options)}
        key={options.value}
      >
        {options.label}
      </div>
    );
  });

  // comment out code since I'm going to make a cleaner one
  // let content = 'select...'
  // if(select){
  //   content = content.label
  // }

  return (
    <div ref={divEl} className="w-48 relative">
      {/* updated the let content inside here */}
      <Panel
        className="flex justify-between items-center cursor-pointer "
        onClick={handleClick}
      >
        {value?.label || "select..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {open && <Panel className="absolute top-full">{renderOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
