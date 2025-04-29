import { motion } from "framer-motion";

import NavigationList from "@/components/Navigation List";

// Animation variants for navigation height transitions
const heightAnimation = {
  initial: {
    height: 0, // Start with height 0 (collapsed)
  },
  open: {
    height: "85vh", // Expand to 85% of viewport height when open
    transition: { duration: 1, ease: [0.75, 0, 0.23, 1] },
  },
  close: {
    height: 0, // Collapse back to 0 on exit
    transition: { duration: 1, ease: [0.75, 0, 0.23, 1] },
  },
};

const Navigation = () => {
  return (
    // Animated navigation container
    <motion.nav
      variants={heightAnimation}
      initial="initial"
      animate="open"
      exit="close"
      className="bg-primary overflow-hidden absolute z-[50] -top-full w-full"
    >
      {/* Centered NavigationList inside a container */}
      <div className="container mx-auto h-full flex items-center justify-center">
        <NavigationList />
      </div>
    </motion.nav>
  );
};

export default Navigation;
