import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const animationVariants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  scaleUp: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
};

const AnimatedWrapper = ({ children, isVisible, animationType = 'fade' }) => {
  const selectedAnimation = animationVariants[animationType] || animationVariants.fade;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={selectedAnimation.initial}
          animate={selectedAnimation.animate}
          exit={selectedAnimation.exit}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedWrapper;
