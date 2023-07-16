import { useState } from "react";
import classes from "./stepper.module.css";

export default function Stepper({ messages, initialStep = 1 }) {
  const [step, setStep] = useState(initialStep);

  const handleDecrement = () => {
    if (step > 0) setStep((cur) => cur - 1);
  };

  const handleIncrement = () => {
    if (step < messages.length) setStep((cur) => cur + 1);
  };

  return (
    <div className={classes.container}>
      <div className={classes.numbersContainer}>
        {messages.map((m, i) => {
          return (
            <div
              key={m}
              className={`${classes.number} ${step > i ? classes.active : ""}`}
            >
              <span>{i + 1}</span>
            </div>
          );
        })}
      </div>
      <div className={classes.messageContainer}>
        <p>
          Step {step}: {messages.at(step - 1)}
        </p>
      </div>
      <div className={classes.buttons}>
        <button disabled={step === 1} onClick={handleDecrement}>
          Previous
        </button>
        <button disabled={step === messages.length} onClick={handleIncrement}>
          Next
        </button>
      </div>
    </div>
  );
}
