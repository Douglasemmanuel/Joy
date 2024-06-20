import React from 'react'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import joy2 from "../assets/joy2.jpg"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFaceGrinHearts} from '@fortawesome/free-regular-svg-icons/faFaceGrinHearts'
import Page11 from './Page11'
const Page10 = () => {
  const [step , setStep] = useState(false)
  const  [visible , setVisible]  = useState(true)
  const navigate = useNavigate()
  useEffect(()=>{
    
    setTimeout(()=>{
      console.log('jii')
      setVisible(false)
      setStep(true)
      // navigate('/11')
     
      
  },6000);
   
  } , [])
  return (
   <>
   {visible && (
     <div>
     <div >
       <img src={joy2}  width={300} height={300}  />
     </div>
     {/* <div style={{marginTop:100}}> */}
     <p  style={{fontSize:'2rem', fontFamily:"Roboto" , marginTop:20  , color:'black'}}>HAPPY BIRTHDAY JOY!</p>
     <p  style={{fontSize:'1.5rem', fontFamily:"Roboto"}}>May God almighty always bless and put a joy on your face !  <FontAwesomeIcon icon={faFaceGrinHearts}  color='black'/></p>
     {/* </div> */}
   </div>
   )}
   {step && <Page11/>}
   </>
  )
}

export default Page10