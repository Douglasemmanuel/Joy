import React from 'react'
import {motion} from 'framer-motion'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Page3 from './Page3'
const Page2 = () => {
    const navigate = useNavigate()
    const [step , setStep] = useState(false)
    const  [visible , setVisible]  = useState(true)
    const move =()=>{
      setVisible(false)
        console.log('hiii')
        // navigate('/3')
        setStep(true)
    }
  return (
   <>
   {visible && (
     <div>
     <motion.p
 initial={{y:100}}
 animate={{y:[100 , 0] }}
 transition={{
     duration:2,
     delay:0
 }}
 style={{fontSize:'2rem' , fontFamily:"Roboto" , color:'black'}}
 whileHover={{scale:0.9 , opacity:0.5}}
 onAnimationComplete={move}
 >
   It's your birthday my girl!!!
 </motion.p>
 </div>
   )}
    {step && <Page3/>}
    </>
  )
}

export default Page2