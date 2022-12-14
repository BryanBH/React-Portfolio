import "../App.css";
import React, { useState } from "react";
import pic from "../images/graduation.png";
import { motion } from "framer-motion";
export default function About() {
  const [language, setLanguage] = useState("Español");

  const handleChange = () => {
    language === "Español" ? setLanguage("English") : setLanguage("Español");
  };

  return (
    <motion.div
      transition={{ duration: 1.2 }}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      className=" section border rounded shadow bg-dark container-lg overflow-auto d-flex align-items-center mt-auto">
      <div className="row align-items-center justify-content-center pe-1">
        <div className="col-sm-9 col-md-10 col-lg-7 d-flex justify-content-center img-mobile-sizing">
          <img
            src={pic}
            alt="about me portrait "
            className="portrait shadow-lg rounded  pt-2"
          />
        </div>
        <div className="col-12 col-md-12 col-lg-5 text-center py-3 ">
          <div className="row d-flex justify-content-center flex-column  px-3">
            <div className="col text-light">
              {language === "Español" ? <EnglishText /> : <SpanishText />}
              <div className="col">
                <button
                  className="btn btn-darkAccent text-light"
                  onClick={handleChange}>
                  {language}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const EnglishText = () => {
  return (
    <>
      <h2>About Me</h2>
      <p>
        I am a newly Computer Science graduate raised by immigrant parents. My
        interests are in full stack development, specifically in web
        development. I have experience working in both healthcare technology and
        in academic information technologies. These past experiences in tech
        have introduced me to software development related topics like agile
        development, QA testing, and scrum meetings, some of which were
        reinforced during my academic courses. My preferred language is
        Javascript, however I have implemented assignments and projects in other
        languages like Java, Python, R and C. As a bilingual native speaker, I
        have had the pleasure of working and collaborating with outstanding
        human beings originating from the USA, Spain and South America.
      </p>
    </>
  );
};

const SpanishText = () => {
  return (
    <>
      <h2>Acerca De Mi</h2>
      <p>
        Desde joven siempre me ha fascinado la tecnología, los videojuegos e
        Informática. Aunque no fui introducido a la programación hasta mi último
        año de bachillerato, siempre he tenido el conocimiento de cómo resolver
        problemas y adaptarme a cambios. Con esto fui capaz de aprender a
        programar mi primer lenguaje y ser capaz de investigar cualquier
        problema que tenga con mis proyectos. Mis tiempos durante mis prácticas
        me han enseñado a cómo trabajar en equipo, a tener la habilidad de
        cambiar de enfoque cuando un problema de mayor prioridad aparece y
        mejorar mi habilidad de comunicarme efectivamente con compañeros de
        trabajo y clientes.
      </p>
    </>
  );
};

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
