import React from "react";
import { motion } from "framer-motion";

export default function Modalt({ repo, close }) {
  const btnText = repo.url ? "Visit Page" : "Visit Repo";
  const repoLink = repo.url ? repo.url : repo.repo;
  return (
    <motion.div
      className=" container text-white d-flex justify-content-center align-items-center "
      variants={modalVariant}>
      <motion.div
        variants={modalVariant}
        className="row bg-evenDarker p-3 rounded-3 shadow-lg position-relative">
        <motion.div className="col-12 col-md-6 my-2 d-flex justify-content-center">
          <motion.img
            variants={imgVariant}
            src={repo.img}
            alt="repo pic"
            className="img-fluid rounded shadow-lg icon"
          />
        </motion.div>
        <motion.div
          vairants={textVariant}
          className="col-12 col-md-6 text-center pt-2">
          <motion.div className="row d-flex justify-content-center align-items-center flex-column">
            <motion.div variants={textRow} className="col">
              <h2>{repo.name}</h2>
            </motion.div>
            <motion.div variants={textRow} className="col lead">
              <p className="px-5">
                {repo.description ? repo.description : repo.shortDescription}
              </p>
            </motion.div>
            <motion.div className="col">
              <motion.div variants={textRow} className="btn btn-primary ">
                <a
                  href={repoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-light text-decoration-none">
                  {btnText}
                </a>
              </motion.div>
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

const imgVariant = {
  open: { opacity: 1, y: "0vh" },
  closed: { opacity: 0, y: "-10vh" },
};

const textVariant = {
  open: { opacity: 1, transition: { staggerChildren: 0.2 } },
  closed: { opacity: 0 },
};

const textRow = {
  open: { opacity: 1, x: "0" },
  closed: { opacity: 0, x: "10%" },
};
