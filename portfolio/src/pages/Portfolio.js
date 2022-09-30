import React from "react";
import "../App.css";

import repos from "../data/reposData";
import RepoLayout from "../components/RepoLayout";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <motion.div
      transition={{ duration: 1.2 }}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      className="portfolio-wrapper container-fluid  bg-dark ">
      <div className="container align-items-center  pt-3">
        <div className="row d-flex justify-content-around ">
          {repos.map((repo, index) => {
            return (
              <div
                key={index}
                className="col col-lg-4 d-flex justify-content-center py-3">
                <RepoLayout repo={repo} />
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

const variants = {
  initial: {
    opactiy: 0,
  },
  animate: {
    opactiy: 1,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  },
  exit: { clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" },
};
