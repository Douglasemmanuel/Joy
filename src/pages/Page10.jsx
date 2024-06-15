import React from 'react'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import joy2 from "../assets/joy2.jpg"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFaceGrinHearts} from '@fortawesome/free-regular-svg-icons/faFaceGrinHearts'
const Page10 = () => {
  const navigate = useNavigate()
  useEffect(()=>{
   
    setTimeout(()=>{
      console.log('jii')
      navigate('/11')
     
      
  },1000);
   
  } , [])
  return (
    <div>
      <div >
        <img src={joy2}  width={300} height={300}  />
      </div>
      {/* <div style={{marginTop:100}}> */}
      <p  style={{fontSize:'2rem', fontFamily:"Roboto" , marginTop:20 , fontWeight:'bold'}}>HAPPY BIRTHDAY JOY!</p>
      <p  style={{fontSize:'1.5rem', fontFamily:"Roboto"}}>May God almighty always bless and put a joy on your face !  <FontAwesomeIcon icon={faFaceGrinHearts}  color='red'/></p>
      {/* </div> */}
    </div>
  )
}

export default Page10