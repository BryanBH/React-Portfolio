import React, { useState } from "react";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Contact({ setShow, setFlashMessage }) {
  const navaigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { value } = event.target;
    setInputValues({ ...inputValues, [event.target.name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputValues);
    await axios
      .post("http://localhost:4000/sendContact", { inputValues })
      .then((res) => {
        setInputValues({ firstName: "", lastName: "", email: "", message: "" });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    setFlashMessage("Contact Information sent!");
    setShow(true);
    navaigate("/");
  };

  return (
    <motion.div
      transition={{ duration: 1.2 }}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      className="contact-section container-fluid d-flex justify-content-center align-items-center">
      <div className="row text-evenDarker">
        <div className="col-12 col-lg-7 rounded-2 glass p-3">
          <form onSubmit={handleSubmit}>
            <div className=" row row-cols-2 mb-3">
              <div className="col-6">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  aria-describedby=""
                  value={inputValues.firstName}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="col-6">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lasttName"
                  name="lastName"
                  aria-describedby=""
                  value={inputValues.lastName}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3 ">
              <div className="col ">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={inputValues.email}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <input
                  className="form-control"
                  type="textarea"
                  id="message"
                  name="message"
                  value={inputValues.message}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3 justify-content-center">
              <div className="col-2 d-flex justify-content-center">
                <button className="btn btn-evenDarker text-light">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-12 col-lg-5">
          <h3>Quick Contact</h3>
          <p>
            <strong>Phone: </strong> <br />
            857-445-3568
          </p>
          <p>
            <strong>Email: </strong> bryanbenjumea@gmail.com
          </p>
          <p>
            <strong></strong>
          </p>
          <h3>Socials</h3>
          <p className="fs-2">
            <a
              href="https://www.linkedin.com/in/bryan-benjumea/"
              className="text-evenDarker"
              target="_blank"
              rel="noreferrer">
              <AiFillLinkedin />
            </a>{" "}
            <a
              href="https://www.instagram.com/bryan_benjumea/"
              className="text-evenDarker"
              target="_blank"
              rel="noreferrer">
              <AiFillInstagram />
            </a>{" "}
            <a
              href="https://github.com/BryanBH"
              className="text-evenDarker"
              target="_blank"
              rel="noreferrer">
              <AiFillGithub />
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

const variants = {
  initial: {
    opactiy: 0,
    // clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  },
  animate: {
    opactiy: 1,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  },
  exit: { clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" },
};
