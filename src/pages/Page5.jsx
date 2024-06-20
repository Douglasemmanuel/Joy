import React from 'react'
import {motion} from 'framer-motion'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Page6 from './Page6'
const Page5 = () => {
  const [step , setStep] = useState(false)
  const  [visible , setVisible]  = useState(true)
  const navigate = useNavigate()
  const move =()=>{
    console.log('hiii')
    setVisible(false)
        // navigate('/6')
        setStep(true)
    }
  return (
 <>
  {visible && (
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
  style={{fontSize:'2rem', fontFamily:"Roboto" , color:'black'}}
  // whileHover={{scale:0.9 , opacity:0.5}}
  onAnimationComplete={move}
  >
    But then i stopped.
  </motion.p>
  </div>
  )}
 {step &&  <Page6/>}</>
  )
}

export default Page5