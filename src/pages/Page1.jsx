import React from 'react'
import {motion} from 'framer-motion'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Page1 = () => {
  const navigate = useNavigate()
    const move =()=>{
      navigate('/2')
      // SetCurrentComponent(1)
        console.log('hiii')
        
    }
    // useEffect(()=>{
    //   const timeoutId = setTimeout(()=>{
    //     SetCurrentComponent(1)
    //     console.log('gii' , SetCurrentComponent)
    //   }, 1000)
    //   return ()=> clearTimeout(timeoutId)
    // } ,[])
    const [animateHeading2 , setAnimateHeading2] = useState(false);
  return (
    <div>
    <motion.h1
    initial={{y:100}}
    animate={{y:[500 , 0] }}
    transition={{
        duration:2,
        delay:0
    }}
    whileHover={{scale:0.9 , opacity:0.5}}
    onAnimationComplete={()=> setAnimateHeading2(true)}
    style={{fontSize:'2rem'}}
    >
      Hey Pretty Joy
    </motion.h1>
    {animateHeading2 && (
        <motion.p
        initial={{y:100  }}
        animate={{y:[400 , 0] }}
        transition={{
            duration:2,
            delay:0
        }}
        onAnimationComplete={move }
        style={{fontSize:'2rem', fontFamily:"Roboto" , color:'black'}}
        >
        I really like you my girl! fr!
        </motion.p>
    )}
    </div>
  )
}

export default Page1