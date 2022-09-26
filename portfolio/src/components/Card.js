import React from "react";
import { motion } from "framer-motion";
import "../App.css";
export default function Card({ repo, open }) {

  return (
    <motion.div
      onClick={open}
      className="card p-3"
      style={{ width: "18rem" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{scale:0.9}}>
      <img src={repo.img} className="card-img-top" alt="Project" />
      <div className="card-body">
        <h5 className="card-title text-primary">{repo.name}</h5>
        <p className="card-text text-darkAccent">{repo.shortDescription}</p>
      </div>
    </motion.div>
  );
}