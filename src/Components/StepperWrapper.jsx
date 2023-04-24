import { useState } from "react";
import Destination from "./Destination";
import Submit from "./Submit";
import Source from "./Source";
import Confirm from "./Confirm";

const StepperWrapper = (details) => {
    const [deliveryData, setDelivaryData] = useState({
        Source: { isPrimary : false,  Name: "", Address: "", Phone_number: "" },
        Destination: { name: "", address: "", phone: "" }
    })
    const [stepperIndex, setStepperIndex] = useState(0)
   
    const renderComponent = (dataa) => {
        switch (stepperIndex) {
            case 0:
                return <Source  deliveryData={deliveryData} onNextClick={(details) => { 
                    setDelivaryData({...deliveryData, Source:{ isPrimary : details.isPrimary, Name:details.Name, Address:details.Address, Phone_number:details.Phone_number}});
                    setStepperIndex(1) }} />
            case 1:
                return <Destination  deliveryData={deliveryData} onPrevClick={(deliveryData) => { setStepperIndex(0) }} onNextClick={(details) => {setStepperIndex(2)
                    setDelivaryData({...deliveryData, Destination:{name:details.name, address:details.address, phone:details.phone}});
                    
                }} />
            case 2:
                return <Submit deliveryData={deliveryData} onPrevClick={(deliveryData) => { setStepperIndex(1) }} onNextClick={() => { setStepperIndex(3) }} />
            case 3:
                return <Confirm onPrevClick={() => { setStepperIndex(2) }} deliveryData={deliveryData}/>
        }
    }
    return (
        <>
            {renderComponent()}
           
        </>
    )
}

export default StepperWrapper;


