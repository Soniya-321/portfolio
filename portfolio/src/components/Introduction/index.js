// src/components/sections/Introduction.js
import React, { useState, useEffect , useMemo} from 'react';
import './index.css'

const Introduction = () => {
  const prefixText = "I'm a "; 
  const words = useMemo(() =>  ["Web Developer", "Fresher", "Full Stack Developer", "Designer"], []);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentTextLength, setCurrentTextLength] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const typingSpeed = 150;
  const backspacingSpeed = 100;
  const delayBetweenWords = 1000;

  useEffect(() => {
    let timeout;

    if (isTyping) {
      // Typing effect - increase the length of the text
      if (currentTextLength < words[currentWordIndex].length) {
        timeout = setTimeout(() => {
          setCurrentTextLength((prev) => prev + 1);
        }, typingSpeed);
      } else {
        // Start backspacing after a short delay once the word is fully typed
        setTimeout(() => setIsTyping(false), delayBetweenWords);
      }
    } else {
      // Backspacing effect - decrease the length of the text
      if (currentTextLength > 0) {
        timeout = setTimeout(() => {
          setCurrentTextLength((prev) => prev - 1);
        }, backspacingSpeed);
      } else {
        // Move to the next word and start typing again
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentTextLength, isTyping, currentWordIndex, words]);
    

  return (
    <div id="introduction" className="intro-section">
      <div className='img-container'>
        <img src='https://res.cloudinary.com/dzsrw1tcr/image/upload/v1728123844/WhatsApp_Image_2024-10-05_at_3.53.21_PM_s8cknl.jpg' alt='profile' className='profile-img'/>
      </div>
      <div className='profile-info'>
        <h1 className='name'>Hello, I'm </h1>
        <h1 className='name'>Soniya Borlakunta</h1>
        <h2>
        {prefixText}<span className='occupation'>{words[currentWordIndex].slice(0, currentTextLength)}</span>
        </h2>
        <p className='description'>
        I am a recent graduate with a deep passion for creating user-centric applications. Excited about building intuitive mobile applications, I have been trained as a full stack developer, equipping me with the skills to bring impactful digital solutions to life.
        </p>
        <a href='https://drive.google.com/file/d/17IbzCOkQ2eKNT5waNUcAE8mBa-qKqi0a/view?usp=sharing' target='_blank' rel="noreferrer" className='resume-link'>
        <button className='resume-btn'>Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Introduction;
