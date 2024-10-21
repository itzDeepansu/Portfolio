import { motion, AnimatePresence } from "framer-motion";

const AnimatedCard = ({ children }) => {
  return (
    <div className="card-wrapper">
      <AnimatePresence>
        <motion.div
          exit={{
            y: -20,
            opacity: 0,
            filter: "blur(5px)",
            transition: { ease: "easeIn", duration: 0.22 },
          }}
          initial={{ opacity: 0, y: -15 }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { type: "spring", duration: 0.7 },
          }}
          className="card"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedCard;
