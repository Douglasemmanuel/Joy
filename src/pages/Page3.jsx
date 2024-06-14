import React from 'react'
import {motion} from 'framer-motion'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Page3 = () => {
  return (
    <div>
        <h1>Happy birthday</h1>
        <TextTyping text="Happy birthday joy" />
        {/* <motion.h1
            initial={{x:0 , opacity:0 , text:''}}
            animate={{x:'100%' , opacity:1 , text:'Happy birthday'}}
            transition={{duration:2 , ease:'easeOut' , delay:0.5, 
            staggerChildren:{
                amount:0.1,
                from:'start'
            }
        }}
            split={{
                chars:true,
                animate:{
                    opacity:1,
                    transition:{duration:0.02}
                },
            }}
        >
            Happy birthday
            </motion.h1> */}
    </div>
  );
}
const TextTyping = ({ text }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [typedText, setTypedText] = useState('');
  
    useEffect(() => {
      const typeWriter = async () => {
        for (let i = 0; i < text.length; i++) {
          await new Promise(resolve => setTimeout(resolve, 50)); // Adjust speed here
          setTypedText(text.substring(0, i + 1));
        }
        setIsVisible(true);
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
          <motion.span key={index} variants={characterVariants} initial="hidden" animate="visible">
            {char}
          </motion.span>
        ))}
      </div>
    );
  };
export default Page3