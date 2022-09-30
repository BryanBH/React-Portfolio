import "../App.css";
import React from "react";
import { motion } from "framer-motion";
export default function Card({ repo, open, job }) {
  return (
    <>
      {repo && (
        <motion.div
          onClick={open}
          className="card p-3"
          style={{ width: "18rem" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
          <img src={repo.img} className="card-img-top" alt="Project" />
          <div className="card-body">
            <h5 className="card-title text-primary">{repo.name}</h5>
            <p className="card-text text-darkAccent">{repo.shortDescription}</p>
          </div>
        </motion.div>
      )}
      {job && (
        <motion.div
          onClick={open}
          className="card p-3"
          style={{ width: "18rem", height: "18rem" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
          <div className="card-body">
            <h5 className="card-title text-dark job-title text-center">{job.name}</h5>
            <p className="card-text text-darkAccent">{job.title}</p>
            <p className="card-text text-darkAccent">{job.date}</p>
          </div>
        </motion.div>
      )}
    </>
  );
}
