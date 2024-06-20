import React from 'react'
import {motion} from 'framer-motion'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Page7 from './Page7'
const Page6 = () => {
  const [step , setStep] = useState(false)
  const  [visible , setVisible]  = useState(true)
  const navigate = useNavigate()
  const move =()=>{
    // navigate('/7')
      setStep(true)
      console.log('hiii')
      
    }
    const [animateHeading2 , setAnimateHeading2] = useState(false);
    useEffect(()=>{
      setTimeout(()=>{
        
        console.log('jii')
        setAnimateHeading2(true)
        setVisible(false)
        move()
        
    },4000);
    },[])
  return (
    
   <>
  {visible && (
      <div style={{display:'flex'}}>
      <div>
      <motion.p
    // initial={{y:200}}
    // animate={{y:[0 ,100 , 0 ] }}
    initial={{y:-80}}
 animate={{y:[0 ,-100 ] }}
    transition={{
        duration:2,
        delay:0
    }}
    style={{fontSize:'1.6rem', fontFamily:"Roboto", color:'black'}}
    onAnimationComplete={()=> setAnimateHeading2(true)}
    // whileHover={{scale:0.9 , opacity:0.5}}
    >
    I realised , I wanted to do something   
            {animateHeading2 && (
           <motion.span 
          //  initial={{y:50}}
          //  animate={{y:[0,50 , 0] }}
          initial={{y:-80}}
          animate={{y:[0 ,-100 ] }}
           transition={{
               duration:2,
               delay:0
           }}
           style={{fontSize:'2rem' , color:'white'  , width:'10rem' , background:'blue', fontFamily:"Roboto" }} >Special</motion.span>
          
           )}
           
         </motion.p>
      </div>
      <div>
        
      </div>
        {/* {animateHeading2 && (
           
           <motion.span style={{fontSize:'3rem' , color:'white'  , width:'10rem' , background:'blue' }} onAnimationComplete={move}>Special</motion.span>
           )} */}
        </div>
  )}
   {step && <Page7/> }
   </>


  )
}
const Target =({move})=>{
    return (
        <motion.span style={{fontSize:'3rem' , color:'white'  , width:'15rem' , background:'blue' }} onAnimationComplete={move}>Special</motion.span>
    )
}
export default Page6