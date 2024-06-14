import React from 'react'
import {motion} from 'framer-motion'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Page2 = () => {
    const navigate = useNavigate()
    const move =()=>{
        console.log('hiii')
        navigate('/3')
    }
  return (
    <div>
        <motion.p
    initial={{y:10}}
    animate={{y:[0 ,50 , 0] }}
    transition={{
        duration:2,
        delay:0
    }}
    style={{fontSize:'2rem' , fontFamily:"Roboto"}}
    whileHover={{scale:0.9 , opacity:0.5}}
    onAnimationComplete={move}
    >
      It's your birthday my girl!!!
    </motion.p>
    </div>
  )
}

export default Page2