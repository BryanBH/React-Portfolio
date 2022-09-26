import React from "react";
import "../App.css";

import repos from "../data/repos";
import RepoLayout from "../components/RepoLayout";

export default function Portfolio() {
  return (
    <>
      <div className="portfolio-wrapper container-fluid  bg-dark ">
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
      </div>
    </>
  );
}
