import { useState } from "react";
import Dropdown from "../components/Dropdown";

const options = [
  { label: "Red", value: "red" },
  { label: "Green", value: "green" },
  { label: "Blue", value: "blue" },
];

function DropdownPage() {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className="flex">
      <Dropdown
        options={options}
        placeholder="Select a color"
        value={selectedOption}
        onChange={setSelectedOption}
      />

      <Dropdown
        options={options}
        placeholder="Select a color"
        value={selectedOption}
        onChange={setSelectedOption}
      />
    </div>
  );
}

export default DropdownPage;
