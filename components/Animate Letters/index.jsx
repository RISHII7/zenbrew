import { motion } from "framer-motion";

// Animation variants for each letter
const LettersAnimate = {
  initial: {
    y: "100%",     // Start below the visible area
    opacity: 0,    // Fully transparent
  },
  enter: i => ({
    y: 0,          // Animate into position
    opacity: 1,    // Fade in
    transition: { duration: 1, ease: [0.6, 0, 0.2, 1], delay: i[0] },
  }),
  exit: i => ({
    y: "100%",     // Animate out below
    opacity: 0,    // Fade out
    transition: { duration: 0.8, ease: [0.6, 0, 0.2, 1], delay: i[1] },
  }),
};

// Utility to animate each letter of a word or phrase
export const AnimateLetters = name => {
  let letters = [];

  // Split the string into letters and animate each one
  name.split("").forEach((letter, index) => {
    letters.push(
      <motion.span
        variants={LettersAnimate}
        initial="initial"
        animate="enter"
        exit="exit"
        custom={[index * 0.04, (name.length - index) * 0.01]} // Animation delay based on index
        key={index}
      >
        {letter}
      </motion.span>
    );
  });

  return letters;
};
