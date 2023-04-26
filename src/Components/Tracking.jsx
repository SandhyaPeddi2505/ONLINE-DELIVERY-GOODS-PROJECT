// write a code for vertical stepperand  we should call API for the steps to work   only when completion  of step1 it should go to step2  it should  be in vertical stepper in reactjs with  functional component

import React, { useState } from "react";
import { Step, Stepper, StepLabel } from "@material-ui/core";

const VerticalStepper = () => {
  // State for Stepper
  const [activeStep, setActiveStep] = useState(0);
  // State for API response
  const [APIResponse, setAPIResponse] = useState(null);

  // Array of Steps
  const steps = [
    {
      title: "Step 1",
      content: "Order confirmed"
    },
    {
      title: "Step 2",
      content: "Awaiting for agent"
    },
    {
      title: "Step 3",
      content: "Agent confirmed"
    },
    {
      title: "Step 4",
      content: "Ordered delivered"
    }
  ];

  // Handle Next Button
  const handleNext = () => {
    if (activeStep === 0) {
      // Call API here
      // When API response comes, setAPIResponse
      // Update activeStep to 1 only when API response is success
      if (APIResponse === "success") {
        setActiveStep(1);
      }
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  // Handle Back Button
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  // Step Content
  const getStepContent = (step) => {
    return steps[step].content;
  };

  return (
    <div className="container">
    <div className="zz">
<div className="xx">
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.title}>
            <StepLabel>{step.title}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div>
        {activeStep === steps.length ? (
          <div>
            <p>All steps completed</p>
            <button>Done</button>
          </div>
        ) : (
          <div>
            <p>{getStepContent(activeStep)}</p>
            <div>
              <button className="btn btn-primary"disabled={activeStep === 0} onClick={handleBack}>
                Back
              </button>
              <button className="btn btn-primary" variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
    </div>
  );
};

export default VerticalStepper;
