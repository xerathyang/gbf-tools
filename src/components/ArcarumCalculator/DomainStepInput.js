import React from "react";
import ArcarumStepInput from "./ArcarumStepInput"
import propTypes from "prop-types";

const stepChoices = [
  "未解鎖",
  "解鎖1格",
  "解鎖2格",
  "解鎖3格",
  "解鎖4格"
];

export default function DomainStepInput({ trackedEvoker, onStepChange }) {
  return (
    <ArcarumStepInput
      title="賢者領域進度"
      trackedItem={trackedEvoker}
      stepChoices={stepChoices}
      fieldnames={{current:"domainCurrent", target:"domainTarget"}}
      onStepChange={onStepChange}
    />
  );
}

DomainStepInput.propTypes ={
    trackedEvoker: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string,
    icon: propTypes.string,
    current: propTypes.number,
    target: propTypes.number
  })),
  onStepChange: propTypes.func
};
