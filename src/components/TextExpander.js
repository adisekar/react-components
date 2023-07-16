import { useState } from "react";
import PropTypes from "prop-types";

TextExpander.propTypes = {
  collapsedWordsNumber: PropTypes.number,
  collapseBtnText: PropTypes.string,
  expandBtnText: PropTypes.string,
  buttonColor: PropTypes.string,
  expanded: PropTypes.bool,
  className: PropTypes.string,
};

export default function TextExpander({
  collapsedWordsNumber = 10,
  collapseBtnText = "Show Less",
  expandBtnText = "Show More",
  expanded = false,
  className,
  buttonColor = "blue",
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedWordsNumber).join(" ") + "...";

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    color: buttonColor,
    marginLeft: "6px",
  };

  return (
    <div className={className}>
      {displayText}
      <button
        style={buttonStyle}
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        {isExpanded ? collapseBtnText : expandBtnText}
      </button>
    </div>
  );
}
