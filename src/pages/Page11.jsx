import React from 'react'
import {motion} from 'framer-motion'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFaceGrinHearts} from '@fortawesome/free-regular-svg-icons/faFaceGrinHearts'
const Page11 = () => {
    const navigate = useNavigate()
    const move =()=>{
    //   navigate('/10')
    //   SetCurrentComponent(10)
        console.log('hiii')
        
    }
    const [animateHeading2 , setAnimateHeading2] = useState(false);
    const [animateHeading3 , setAnimateHeading3] = useState(false);
    const [animateHeading4 , setAnimateHeading4] = useState(false);
  return (
    <div >
      
    <motion.p
    initial={{y:10}}
    animate={{y:[50 , 0] }}
    transition={{
        duration:2,
        delay:0
    }}
    whileHover={{scale:0.9 , opacity:0.5}}
    onAnimationComplete={()=> setAnimateHeading2(true)}
    style={{fontSize:'2rem', fontFamily:"Roboto"}}
    >
      Okay, now come back and tell me if you liked it.
    </motion.p>
   
 
   {animateHeading2 && (
        <motion.p
        initial={{y:10  }}
        animate={{y:[50 , 0] }}
        transition={{
            duration:2,
            delay:0
        }}
        style={{fontSize:'2rem', fontFamily:"Roboto"}}
        onAnimationComplete={()=> setAnimateHeading3(true)}
        >
        Or Click, if you want to watch it again
        </motion.p>
    )}
    {animateHeading3 && (
        <motion.h1
        initial={{y:10  }}
        animate={{y:[50 , 0] }}
        transition={{
            duration:2,
            delay:0
        }}
        style={{fontSize:'4rem' , fontFamily:"Roboto"}}
        onAnimationComplete={()=> setAnimateHeading4(true)}
        >
         <FontAwesomeIcon icon={faFaceGrinHearts} />
        </motion.h1>
    )}
 {animateHeading4 && (
        <motion.p
        initial={{y:10  }}
        animate={{y:[50 , 0] }}
        transition={{
            duration:2,
            delay:0
        }}
        style={{fontSize:'2rem', fontFamily:"Roboto"}}
        // onAnimationComplete={()=> setAnimateHeading4(true)}
        >
        With Love from Douggie
        </motion.p>
    )}
    </div>
  )
}

export default Page11