import React from "react";
import { motion } from "framer-motion";
import "../App.css";
export default function ResumeModal({ job, close }) {
  return (
    <motion.div
      className=" container text-white d-flex justify-content-center align-items-center "
      variants={modalVariant}>
      <motion.div
        variants={modalVariant}
        className="row bg-evenDarker p-3 rounded-3 shadow-lg position-relative">
        <motion.div vairants={textVariant} className="col-12  text-center pt-2">
          <motion.div className="row d-flex justify-content-center align-items-center text-center flex-column">
            <motion.div variants={textRow} className="col lead">
              <h2>{job.name}</h2>
            </motion.div>
            <motion.div variants={textRow} className="col ">
              <p className="px-5 "><i>{job.title} - {job.date}</i></p>
            </motion.div>
            <motion.div variants={textRow} className="col ">
              <p className="px-5 "></p>
            </motion.div>
            <motion.div variants={textRow} className="col ">
              {job.deberes.map((deber, index) => {
                return (
                  <p key={index} className="text-start">
                    • {deber}
                  </p>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.button
          className=" exit btn btn-primary position-absolute top-0 start-100 translate-middle badge rounded-pill"
          whileHover={{ scale: 1.2 }}
          onClick={close}>
          X
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

const modalVariant = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.5, delayChildren: 0.2 },
  },
  closed: { opacity: 0 },
};

const textVariant = {
  open: { opacity: 1, transition: { staggerChildren: 0.2 } },
  closed: { opacity: 0 },
};

const textRow = {
  open: { opacity: 1, x: "0" },
  closed: { opacity: 0, x: "10%" },
};
