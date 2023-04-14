import { useState } from "react";
import Destination from "./Destination";
import Submit from "./Submit";
import Source from "./Source";
import Confirm from "./Confirm";

const StepperWrapper = () => {

    const [stepperIndex, setStepperIndex] = useState(0)
    const renderComponent = () => {
        switch(stepperIndex){
            case 0:
                    return <Source  onNextClick = {() => {setStepperIndex(1) }}/>
            case 1:
                    return <Destination onPrevClick = {() => {setStepperIndex(0) }}  onNextClick = {() => {setStepperIndex(2) }}/>
            case 2:
                    return <Submit onPrevClick = {() => {setStepperIndex(1) }} onNextClick = {() => {setStepperIndex(3) }}/>
            case 3:
                    return <Confirm  onPrevClick = {() => {setStepperIndex(2) }}/>
        }
    }
    return (
        <>
            {renderComponent()}
        </>
    )
}

export default StepperWrapper;

