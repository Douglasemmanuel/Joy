import React from 'react'
import {motion} from 'framer-motion'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFaceGrinHearts} from '@fortawesome/free-regular-svg-icons/faFaceGrinHearts'
const Page8 = () => {
    const navigate = useNavigate()
    const move =()=>{
      navigate('/9')
        console.log('hiii')
        
    }
  return (
    <div>
    <motion.h1
initial={{y:200}}
animate={{y:[0 ,100 , 0 ] }}
transition={{
    duration:2,
    delay:0
}}
// whileHover={{scale:0.9 , opacity:0.5}}
onAnimationComplete={move}
>
  You are Special
  <FontAwesomeIcon icon={faFaceGrinHearts} />
  {/* <FontAwesomeIcon icon="fa-solid fa-face-grin-hearts" /> */}
</motion.h1>
</div>
  )
}

export default Page8