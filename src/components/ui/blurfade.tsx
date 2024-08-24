// src/components/BlurFade.tsx
import React, { ReactNode, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface BlurFadeProps {
  children: ReactNode;
  duration?: number; // Optional duration prop for animation
  amount?: number; // Optional amount for in-view detection
}

const BlurFade: React.FC<BlurFadeProps> = ({ children, duration = 0.5, amount = 0.1 }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount });
  const [hasAnimated, setHasAnimated] = useState(false);

  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }} // Start slightly below
      animate={hasAnimated ? { opacity: 1, filter: 'blur(0px)', y: 0 } : { opacity: 0, filter: 'blur(10px)', y: 20 }} // Move up to y: 0
      transition={{ duration, ease: 'easeOut' }} // Smooth and fast transition
    >
      {children}
    </motion.div>
  );
};

export default BlurFade;
