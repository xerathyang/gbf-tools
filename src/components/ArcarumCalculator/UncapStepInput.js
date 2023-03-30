import React from "react";
import ArcarumStepInput from "./ArcarumStepInput"
import propTypes from "prop-types";

const stepChoices = [
  "未解鎖",
  "賢者終突",
  "解放第4技能",
];

export default function UncapStepInput({ trackedUncap, onStepChange }) {
  return (
    <ArcarumStepInput
      title="賢者終突進度"
      trackedItem={trackedUncap}
      stepChoices={stepChoices}
      fieldnames={{current:"uncapCurrent", target:"uncapTarget"}}
      onStepChange={onStepChange}
    />
  );
}

UncapStepInput.propTypes ={
    trackedUncap: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string,
    icon: propTypes.string,
    current: propTypes.number,
    target: propTypes.number
  })),
  onStepChange: propTypes.func
};
