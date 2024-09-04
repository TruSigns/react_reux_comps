import React from "react";
import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandIndex, setExpandIndex] = useState(-1);

  // handleClick to expand all of the post
  const handleClick = (nextIndex) => {
    if(expandIndex === nextIndex){
      setExpandIndex(-1);
    } else{
      setExpandIndex(nextIndex);
    }
  };


  const renderItems = items.map((item, index) => {
    // index has to equal expandedIndex
    const isExpanded = index === expandIndex;

    // variable that use Ternary Operator where isExpanded is true - bring down icon if not, then left icon
    const icon = (
      <span className="text-2xl ">{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );

    return (
      <div key={item.id}>
        <div handleClick={handleClick} className= "flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer " onClick={() => setExpandIndex(index)}>
          {item.label}
          {icon}
        </div>
        {/* checking to see if content is expanded and have content within inside the item */}
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return (
    <div className="border-x border-t rounded">
      {/* render items */}
      {renderItems}
    </div>
  );
}

export default Accordion;
