import React, { useState } from "react";
import pic from "../images/graduation.png";
import "../App.css";
export default function About() {
  const [language, setLanguage] = useState("Español");

  const handleChange = () => {
    language === "Español" ? setLanguage("English") : setLanguage("Español");
  };

  return (
    <>
      <div className="section border rounded shadow bg-dark container-lg overflow-auto d-flex align-items-center">
        <div className="row align-items-center pe-1">
          <div className="col-12 col-md-7 d-flex justify-content-center ">
            <img
              src={pic}
              alt="about me portrait"
              className="portrait shadow-lg rounded img-fluid"
            />
          </div>
          <div className="col col-md-5 text-center py-3 ">
            <div className="row d-flex justify-content-center flex-column  px-3">
              <div className="col text-light">
                {language === "Español" ? <EnglishText /> : <SpanishText />}
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
    </>
  );
}

const EnglishText = () => {
  return (
    <>
      <h2>About Me</h2>
      <p>
        There are many variations of passages of Lorem available, but the
        lteration in some form, by injected humour lebmid ipsum by injected
        humour lebmid. There are many variations of passages of Lorem, but the
        majority have suffered lebmid by injected.There are many variations of
        passages of Lorem available, but the lteration in some form, by injected
        humour lebmid ipsum by injected humour lebmid. There are many variations
        of passages of Lorem, but the majority have suffered lebmid by injected.
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