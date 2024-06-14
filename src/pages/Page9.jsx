import React from 'react'
import {motion} from 'framer-motion'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Page9 = () => {
    const navigate = useNavigate()
    const move =()=>{
        navigate('/11')
    //   navigate('/10')
        console.log('hiii')
        
    }
    const [animateHeading2 , setAnimateHeading2] = useState(false);
  return (
    <div style={{display:'flex'}}>
         <div>
    <motion.h1
    initial={{y:10}}
    animate={{y:[50 , 0] }}
    transition={{
        duration:2,
        delay:0
    }}
    whileHover={{scale:0.9 , opacity:0.5}}
    onAnimationComplete={()=> setAnimateHeading2(true)}
    style={{fontSize:'10rem', fontFamily:"Roboto"}}
    >
      S
    </motion.h1>
    </div>
   <div>
   {animateHeading2 && (
        <motion.h1
        initial={{y:10  }}
        animate={{y:[50 , 0] }}
        transition={{
            duration:2,
            delay:0
        }}
        style={{fontSize:'10rem', fontFamily:"Roboto"}}
        onAnimationComplete={move }
        >
        o
        </motion.h1>
    )}
   </div>
    </div>
  )
}

export default Page9