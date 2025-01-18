import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo"; // Import the Logo component

function Loader({ isLoading, setIsLoading }: any) {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(); // Hide the loader after 1900ms
    }, 1900);
  }, [setIsLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          exit={{ scale: 0 }}
          key="motiondivleave"
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        >
          {/* Render the Logo component */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <Logo /> {/* Display the Logo */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
