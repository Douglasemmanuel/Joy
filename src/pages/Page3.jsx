import React from 'react'
import {motion} from 'framer-motion'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Page4 } from './Page4'
const Page3 = () => {
  const  [visible , setVisible]  = useState(true)
  const [step , setStep] = useState(false)
  const move =()=>{
   
    console.log('hiii')
    // navigate('/4')
    setStep(true)
   
}
  
  return (
   <>
  {visible && (
      <div>
       
      <div style={{borderRadius:10  , width:'20rem'  , borderWidth: 2 , borderColor:'grey ' , borderStyle:'solid'}}>
      <TextTyping text="Happy birthday to you!! pretty joy!!!! Many many happy returns..."  setStep={setStep}  setVisible={setVisible} />
      </div>
      <button style={{alignItems:'flex-end' , marginTop:10 , backgroundColor:'white ' , color:'black' , border:'2px solid black'}}>Send</button>
      {/* <TextTyping text="Happy birthday joy"  isVisible={isVisible} setIsVisible={setIsVisible} /> */}
     
  </div>
  )}
   {step && <Page4/>}
   </>
  );
}
const TextTyping = ({ text  , setStep , setVisible}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [typedText, setTypedText] = useState('');
    const navigate = useNavigate()
    const move =()=>{
        console.log('hiii')
        // navigate('/4')
        setVisible(false)
        setStep(true)
    }
    useEffect(() => {
      const typeWriter = async () => {
        for (let i = 0; i < text.length; i++) {
          await new Promise(resolve => setTimeout(resolve, 200)); // Adjust speed here
          setTypedText(text.substring(0, i + 1));
        }
        setIsVisible(true);
        setTimeout(()=>{
              console.log('jii')
              move()
              
          },1000);
      };
  

      typeWriter();
    }, [text]);
  
    const characterVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };
  
    return (
      <div>
        {typedText.split('').map((char, index) => (
          <motion.span key={index} variants={characterVariants} initial="hidden" animate="visible" style={{fontSize:'1.2rem', fontFamily:"Roboto" , color:'black' }}>
            {char}
          </motion.span>
        ))}
      </div>
    );
  };
export default Page3
