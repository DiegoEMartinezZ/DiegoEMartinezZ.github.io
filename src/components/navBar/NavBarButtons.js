import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

export const NavBarButtons = () => {
  const dayMode = () => {};

  const openMenu = () => {};

  return (
    <>
      <section className="navbar-buttons">
        <a href="/portfolio-web">
          <FontAwesomeIcon icon={faGlobe} />
        </a>
        <a href="/portfolio-web">
          <FontAwesomeIcon icon={faMoon} onClick={dayMode} />
        </a>
        <a href="/portfolio-web">
          <FontAwesomeIcon icon={faBars} onClick={openMenu} />
        </a>
      </section>
    </>
  );
};