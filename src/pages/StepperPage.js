import Stepper from "../components/stepper/Stepper";

const messages = [
  "Pick a technology",
  "Learn React",
  "Get a Job",
  "Continue Learning",
];

export default function StepperPage() {
  return <Stepper messages={messages} initialStep={3} />;
}
