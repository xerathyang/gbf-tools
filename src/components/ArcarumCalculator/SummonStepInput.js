import React from "react";
import ArcarumStepInput from "./ArcarumStepInput"
import propTypes from "prop-types";

const stepChoices = [
  "未獲得",
  "SR0突",
  "SR1突",
  "SR2突",
  "SR3突",
  "SSR3突",
  "SSR4突",
  "SSR5突",
  "賢者"
];

export default function SummonStepInput({ trackedSummons, onStepChange }) {
  return (
    <ArcarumStepInput
      title="轉世召唤石進度"
      trackedItem={trackedSummons}
      stepChoices={stepChoices}
      fieldnames={{current:"current", target:"target"}}
      onStepChange={onStepChange}
    />
  );
}

SummonStepInput.propTypes ={
  trackedSummons: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string,
    icon: propTypes.string,
    current: propTypes.number,
    target: propTypes.number
  })),
  onStepChange: propTypes.func
};
