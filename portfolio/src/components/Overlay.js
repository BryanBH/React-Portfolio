import React, { useId } from "react";
import { motion } from "framer-motion";
export default function Overlay({ children, close }) {
  const variants = {
    open: { backgroundColor: "rgba(0,0,0,0.6)" },
    closed: { backgroundColor: "rgba(0,0,0,0)" },
  };
  return (
    <motion.div
      className="overlay d-flex container-fluid"
      key={useId()}
      onClick={close}
      variants={variants}
      initial={"closed"}
      exit={"closed"}
      animate={"open"}>
      {children}
    </motion.div>
  );
}
