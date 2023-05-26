import { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const onClickHandler = (index) => {
    setExpandedIndex((currentExpandedIndex) => {
      // reset expanded if same section clicked
      if (index === currentExpandedIndex) {
        return -1;
      } else {
        return index;
      }
    });
    // stale version if we don't use setState to get prevValue before updating
    // if (index === expandedIndex) {
    //   setExpandedIndex(-1);
    // } else {
    //   setExpandedIndex(index);
    // }
  };

  return items.map((item, index) => {
    const { id, label, content } = item;

    const isExpanded = expandedIndex === index;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronRight />}
      </span>
    );

    return (
      <div key={id} className="border-b border-t rounded">
        <h3
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => onClickHandler(index)}
        >
          {label}
          {icon}
        </h3>
        {isExpanded && <div className="border-b p-5">{content}</div>}
      </div>
    );
  });
};

export default Accordion;
