import { Steps } from 'rsuite';
import axios from 'axios';
import {useState,useEffect} from 'react'
import 'rsuite/dist/rsuite.min.css';
// import Navbar from './Navbar';
import { API_BASE_URL } from './api.jsx';
import NavwithIcon from "./NavwithIcon";
import "./Tracking.scss";


 const VerticalStepper = () => {
  // const [activeStep, setActiveStep] = useState(0);
  const [APIResponse, setAPIResponse] = useState([]);
  
  useEffect(()=>{
    axios.get(`${API_BASE_URL}/order_status/${localStorage.getItem("orderId")}`,
    // http://ec2-52-66-237-19.ap-south-1.compute.amazonaws.com:8001/order_status/{localStorage.getItem("orderId")}`, 
     { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    // axios.get(/order_status",
    )
    .then((response) => {
      console.log(response);
      // localStorage.clear()
    });
          // axios.get('http://ec2-13-235-67-132.ap-south-1.compute.amazonaws.com:8001/DUMMY_INFO/').then((response)=>{
          //   setAPIResponse(response.data)
          // })
        },[])
    
    // APIResponse.map((i) => {
    //   if (i["status_code"] === 200) {
    //     count += 1;
    //   }
    // });

    let count = 0;
    APIResponse.map((i) => {
      if (i["status_code"] === 200) {
        count += 1;
      }
    });


    // APIResponse.map((i)=>{
    //   if (i['status_code']== 200){
    //     setActiveStep(()=>activeStep+1)
    //   }
    // })

  // console.log(APIResponse)
  //   useEffect(()=>{
  //     APIResponse.map((i)=>{
  //       if(i['status_code']==200){
  //         setActiveStep(activeStep+1);
  //       }
  //     })
      
  //   },[]);
   
    
  return (
    <>
    {/* <Navbar/> */}
    <NavwithIcon/>
<div className='ee'>
    
    <div className='steps'>

      <Steps vertical current={count}>

        <Steps.Item description=<h6 style={{ color: "white"}}>Order placed</h6>/>

        {/* <Steps.Item description=<h6 style={{ color: "white"}}>Awaiting for Agent</h6>/> */}

        <Steps.Item description=<h6 style={{ color: "white"}}>Agent confirmed</h6>/>

        <Steps.Item description= <h6 style={{ color: "white"}}>Order delivered</h6>/>

      </Steps>

    </div>
    </div>
    </>
  )

}
export default VerticalStepper;