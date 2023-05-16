import { useState } from "react";
import Destination from "./Destination";
import Submit from "./Submit";
import Source from "./Source";
import Confirm from "./Confirm";

const StepperWrapper = (details,address) => {
    const [deliveryData, setDelivaryData] = useState({
        Source: { isPrimary : false,  name: "", Address: "", phone: "",primary_location:""},
        Destination: { name: "", address: "", phone: "",destinationLocation:"" }
    })
    const [stepperIndex, setStepperIndex] = useState(0)
   
    const renderComponent = (dataa) => {
        switch (stepperIndex) {
            case 0:
                return <Source  deliveryData={deliveryData} onNextClick={(details) => { 
                    console.log('33333333333333333333',details)
                    console.log('77',details.primary_location)
                    console.log('source',details.name)
                    setDelivaryData({...deliveryData, Source:{ isPrimary : details.isPrimary, name:details.name, Address:details.Address, phone:details.phone,primary_location:details.primary_location}});
                    setStepperIndex(1) }} />
            case 1:
                return <Destination  deliveryData={deliveryData} onPrevClick={(deliveryData,address) => { setStepperIndex(0) }} onNextClick={(details) => {setStepperIndex(2)
                    setDelivaryData({...deliveryData, Destination:{name:details.name, address:details.address, phone:details.phone,destinationLocation:details.destinationLocation}});
                    
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


