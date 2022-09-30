import React, { useRef, useState } from "react";
import "../App.css";
import { motion } from "framer-motion";
import Resume from "../components/Resume";
export default function Home() {
  const [show, setShow] = useState(false);
  const resumeRef = useRef(null);
  const showResume = () => {
    setShow(true);
    setTimeout(() => {
      resumeRef.current?.scrollIntoView({ inline: "start", behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <motion.div
        transition={{ duration: 1.2 }}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        className="section intro container-fluid text-light d-flex align-items-center">
        <div className="row d-flex flex-fill">
          <div className="col  offset-2">
            <h1> Hello, I'm Bryan Benjumea</h1>
            <h2> WIT Class of 2022</h2>
            <button className="btn btn-light text-muted" onClick={showResume}>
              View Job Experience
            </button>
          </div>
        </div>
        {/* </div> */}
      </motion.div>
      {show && <Resume ref={resumeRef} />}
    </>
  );
}
const variants = {
  initial: { opactiy: 0 },
  animate: { opactiy: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" },
  exit: { clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" },
};
