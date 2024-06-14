import React from 'react'
import {motion} from 'framer-motion'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Page5 = () => {
    const navigate = useNavigate()
    const move =()=>{
        console.log('hiii')
        navigate('/6')
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
  But then i stopped.
</motion.h1>
</div>
  )
}

export default Page5