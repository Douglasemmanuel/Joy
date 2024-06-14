import React from 'react'
import {motion} from 'framer-motion'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Page1 = () => {
  const navigate = useNavigate()
    const move =()=>{
      navigate('/2')
        console.log('hiii')
        
    }
    const [animateHeading2 , setAnimateHeading2] = useState(false);
  return (
    <div>
    <motion.h1
    initial={{y:100}}
    animate={{y:[0 ,500 , 0] }}
    transition={{
        duration:2,
        delay:0
    }}
    whileHover={{scale:0.9 , opacity:0.5}}
    onAnimationComplete={()=> setAnimateHeading2(true)}
    >
      Hey Pretty Joy
    </motion.h1>
    {animateHeading2 && (
        <motion.p
        initial={{y:100  }}
        animate={{y:[200 , 0] }}
        transition={{
            duration:2,
            delay:0
        }}
        onAnimationComplete={move }
        >
        I really like you my girl! fr!
        </motion.p>
    )}
    </div>
  )
}

export default Page1