import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  delay: number;
  infinite?: boolean; // `infinite` is optional
}

const Typewriter: React.FC<TypewriterProps> = ({ text, delay, infinite = false }) => {
  const [currentText, setCurrentText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;

    if (currentIndex <= text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

    } else if (infinite) {
      setCurrentIndex(0);
      setCurrentText('');
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [currentIndex, delay, infinite, text]);

  return <span>{currentText}</span>;
};

export default Typewriter;
