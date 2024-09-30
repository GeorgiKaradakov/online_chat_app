import React, { useState, useEffect } from 'react';
import '../styles/Typewriter.css';

const Typewriter = ({text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Reset current text and index if the text prop changes
    setCurrentText('');
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }else{
      setIsFinished(true);
    }
  }, [currentIndex, text, delay]);

  return (
    <span>
      {currentText}
      <span className={`${isFinished ? "hidden" : "blinking-cursor"}`}>|</span>
    </span>
  );
};

export default Typewriter;
