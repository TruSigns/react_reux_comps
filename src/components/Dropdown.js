import React, { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const divEl = useRef(null); // Ensure initial value is `null`

  useEffect(() => {
    const handler = (e) => {
      if (divEl.current && !divEl.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickOption = (option) => {
    setOpen(false);
    onChange(option);
  };

  const renderOptions = options.map((option) => (
    <div
      className="hover:bg-sky-100 rounded cursor-pointer p-1"
      onClick={() => handleClickOption(option)}
      key={option.value}
    >
      {option.label}
    </div>
  ));

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {open && <Panel className="absolute top-full">{renderOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
