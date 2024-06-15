import React from 'react'
import {motion} from 'framer-motion'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export const Page4 = () => {
    const navigate = useNavigate()
    const move =()=>{
        console.log('hiii')
        navigate('/5')
    }
  return (
    <div>
        <motion.p
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
      That's What I was going to do.
    </motion.p>
    </div>
  )
}
