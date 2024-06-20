import React from 'react'
import {motion} from 'framer-motion'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFaceGrinHearts} from '@fortawesome/free-regular-svg-icons/faFaceGrinHearts'
import Page9 from './Page9'
const Page8 = () => {
  const [step , setStep] = useState(false)
  const  [visible , setVisible]  = useState(true)
  const navigate = useNavigate()
  const move =()=>{
    // navigate('/9')
    setVisible(false)
    setStep(true)
        console.log('hiii')
        
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
  style={{fontSize:'2.5rem', fontFamily:"Roboto", color:'black'}}
  // whileHover={{scale:0.9 , opacity:0.5}}
  onAnimationComplete={move}
  >
    You are Special
    <FontAwesomeIcon icon={faFaceGrinHearts} />
    {/* <FontAwesomeIcon icon="fa-solid fa-face-grin-hearts" /> */}
  </motion.p>
  </div>
  )}
  {step && <Page9/>}
  </>
  )
}

export default Page8