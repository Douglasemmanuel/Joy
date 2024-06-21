import React from 'react'
import {motion} from 'framer-motion'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Page2 from './Page2'
const Page1 = () => {
  
  const [step , setStep] = useState(false)
  const navigate = useNavigate()
    const move =()=>{
      setVisible(false)
      setStep(true)
      // navigate('/2')
      
        console.log('hiii')
        
    }
    
    const [animateHeading2 , setAnimateHeading2] = useState(false);
    const  [visible , setVisible]  = useState(true)
  return (
   <>
        {visible && (
            <div>
            <motion.h1
            // initial={{y:300}}
            // animate={{y:[600 , 0] }}
            initial={{y:-50}}
            animate={{y:[0 ,-120 ] }}
            transition={{
                duration:2,
                delay:0
            }}
            whileHover={{scale:0.9 , opacity:0.5}}
            onAnimationComplete={()=> setAnimateHeading2(true)}
            style={{fontSize:'2rem', fontFamily:"Roboto" , color:'black'}}
            >
              Hey Pretty Joy
            </motion.h1>
            {animateHeading2 && (
                <motion.p
                // initial={{y:100  }}
                // animate={{y:[400 , 0] }}
                initial={{y:-50}}
                animate={{y:[0 ,-120 ] }}
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
        )}
        {step && (
         <Page2/>
        )}
    </>
  )
}

export default Page1