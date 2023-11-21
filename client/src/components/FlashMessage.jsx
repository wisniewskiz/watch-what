import React, {useContext} from "react";
import { motion, AnimatePresence } from "framer-motion";
import MoviesContext from "../context/movies";
import "./FlashMessage.css";

export default function FlashMessage() {
  const { errorFlash } = useContext(MoviesContext);
  return (
    <AnimatePresence>
      {errorFlash && <motion.div
      layout
        className="flash"
        key="flash warning"
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 100,
        }}
        exit={{
          scale: 0,
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        Woops: A movie could not be found with that title. Please try again!
      </motion.div>}
    </AnimatePresence>
  );
}
