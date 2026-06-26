import { useState, useEffect } from 'react';

const AnimatedTagline = () => {
  const taglines = [
    "Data Science Student",
    "Full Stack Developer",
    "AI/ML Enthusiast",
    "Web Developer",
    "Python Programmer"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentTagline = taglines[currentIndex];
      
      if (isDeleting) {
        setDisplayText(currentTagline.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayText(currentTagline.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === currentTagline) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % taglines.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, taglines, typingSpeed]);

  return (
    <span className="text-primary font-medium">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default AnimatedTagline;