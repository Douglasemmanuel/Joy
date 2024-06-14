import React from 'react'
import {motion} from 'framer-motion'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Page7 = () => {
    const navigate = useNavigate()
    const move =()=>{
      navigate('/8')
        console.log('hiii')
        
    }
  return (
    <div>
    <motion.p
initial={{y:200}}
animate={{y:[0 ,100 , 0 ] }}
transition={{
    duration:2,
    delay:0
}}
style={{fontSize:'2rem', fontFamily:"Roboto"}}
// whileHover={{scale:0.9 , opacity:0.5}}
onAnimationComplete={move}
>
  Because,
</motion.p>
</div>
  )
}

export default Page7