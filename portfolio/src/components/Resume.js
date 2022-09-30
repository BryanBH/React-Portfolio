import React, { forwardRef } from "react";
import resume from "../data/resumeData";
import "../App.css";
import ResumeLayout from "./ResumeLayout";
import { motion } from "framer-motion";

const Resume = forwardRef((props, ref) => {
  return (
    <motion.div
      ref={ref}
      transition={{ duration: 1.2 }}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      className="section container-fluid bg-light h-100 ">
      <div className="container align-items-center mt-3 py-3">
        <div className="row row-cols-2 d-flex justify-content-around">
          {resume.map((job, index) => {
            return (
              <div
                key={index}
                className="col col-lg-4 d-flex justify-content-center py-3">
                <ResumeLayout key={index} job={job} />
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
});

const variants = {
  initial: { opactiy: 0 },
  animate: { opactiy: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" },
  exit: { clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" },
};

export default Resume;
