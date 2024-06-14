import React from 'react'
import {motion} from 'framer-motion'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Page3 = () => {
  // const [isVisible, setIsVisible] = useState(false);
  const move =()=>{
    console.log('hiii')
    navigate('/4')
}
  // useEffect(()=>{
  //   setTimeout(()=>{
  
  //     isVisible(true)
  //     console.log('jii')
  //     move()
      
  // },1000);
  // },[])
  return (
    <div>
        {/* <h1>Happy birthday</h1> */}
        <div style={{borderRadius:10  , width:'30rem' , borderWidth:3 , borderColor:'black'}}>
        <TextTyping text="Happy birthday to you!! pretty joy!!!! Many many happy returns..."  />
        </div>
        {/* <TextTyping text="Happy birthday joy"  isVisible={isVisible} setIsVisible={setIsVisible} /> */}
       
    </div>
  );
}
const TextTyping = ({ text }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [typedText, setTypedText] = useState('');
    const navigate = useNavigate()
    const move =()=>{
        console.log('hiii')
        navigate('/4')
    }
    useEffect(() => {
      const typeWriter = async () => {
        for (let i = 0; i < text.length; i++) {
          await new Promise(resolve => setTimeout(resolve, 500)); // Adjust speed here
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
          <motion.span key={index} variants={characterVariants} initial="hidden" animate="visible" style={{fontSize:'1.6rem', fontFamily:"Roboto"}}>
            {char}
          </motion.span>
        ))}
      </div>
    );
  };
export default Page3