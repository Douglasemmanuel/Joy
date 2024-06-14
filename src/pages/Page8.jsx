import React from 'react'
import {motion} from 'framer-motion'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Page8 = () => {
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
// onAnimationComplete={move}
>
  You are Special,
</motion.h1>
</div>
  )
}

export default Page8