import { useState } from "react";

const btnStyle = {
  width: "80px",
  height: "30px",
  padding: "2px",
  borderRadius: "10px",
  textAlign: "center",
  color: "black",
};

export default function Reply({ onSubmit, onCancel }) {
  const [input, setInput] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmit(input);
    setInput("");
  };

  return (
    <div>
      <form
        onSubmit={onSubmitHandler}
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <input
          type="text"
          value={input}
          style={{ border: "1px solid black" }}
          onChange={(e) => setInput(e.target.value)}
        />
        <button style={btnStyle} type="button" onClick={onCancel}>
          Cancel
        </button>
        <button style={btnStyle}>Submit</button>
      </form>
    </div>
  );
}
