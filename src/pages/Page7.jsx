import React from 'react'
import {motion} from 'framer-motion'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Page8 from './Page8'
const Page7 = () => {
  const [step , setStep] = useState(false)
  const navigate = useNavigate()
  const  [visible , setVisible]  = useState(true)
  const move =()=>{
    // navigate('/8')
    setStep(true)
    setVisible(false)
        console.log('hiii')
        
    }
  return (
  <>
  {visible && (
      <div>
      <motion.p
  // initial={{y:50}}
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
    Because,
  </motion.p>
  </div>
  )}
  {step && <Page8/>}
  </>
  )
}

export default Page7