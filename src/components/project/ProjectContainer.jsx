import { faBehance, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import english from "../../resources/languages/english.json";

import React from "react";

export const ProjectContainer = ({ titleProject, previewURL, gitURL }) => {
  const { buttons } = english[4];

  return (
    <>
      <section className="description-container" id="project-container">
        <h1 className="subtitle" id="project-title">
          {titleProject}
        </h1>

        <div className="buttons-wrap">
          <button className="code-btn" id="preview">
            <a href={previewURL} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEye} /> {buttons.web}
            </a>
          </button>

          <button className="code-btn" id="coding">
            <a href={gitURL} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> {buttons.github}
            </a>
          </button>

          <button className="code-btn">
            <a href="{behanceURL}" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faBehance} /> {buttons.behance}
            </a>
          </button>
        </div>
      </section>
    </>
  );
};
