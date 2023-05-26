import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({ options, placeholder, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ddRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ddRef.current && !ddRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  if (!options || options.length === 0) {
    return null;
  }

  const onOptionClickHandler = (option) => {
    onChange(option);
    setOpen(false);
  };

  const currentSelectedLabel =
    value === null ? placeholder || "Select ..." : value.label;

  return (
    <div ref={ddRef} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen((currentOpen) => !currentOpen)}
      >
        {currentSelectedLabel}
        <GoChevronDown className="text-lg" />
      </Panel>
      {open && (
        <Panel className="absolute top-full">
          {options.map((option) => {
            const { label, value } = option;
            return (
              <div
                className="hover:bg-sky-100 rounded cursor-pointer p-1"
                key={value}
                onClick={() => onOptionClickHandler(option)}
              >
                {label}
              </div>
            );
          })}
        </Panel>
      )}
    </div>
  );
};

export default Dropdown;
