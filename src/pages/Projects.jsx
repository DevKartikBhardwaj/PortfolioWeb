import React, { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Links from "../components/Links";
import project from "../assets/project.png";
import github from "../assets/icons/github.png";
import redirect from "../assets/icons/redirect.png";
import scrollImg from "../assets/icons/scroll.gif";

const Projects = () => {
  const [scrollerVisibility, setScrollerVisibility] = useState("visible");
  var limitRenders = 1;
  window.addEventListener("scroll", () => {
    if (limitRenders) {
      limitRenders = 0;
      setScrollerVisibility("hidden");
    }
  });
  return (
    <div className="container" onScroll={() => console.log("scrolled")}>
      <Links name="Projects" />
      <div className="projects-page-wrapper">
        <h1 className="primary-heading">My Projects</h1>
        <h6 className="secondary-heading">
          &#40;Every project is a product of my unique, original work, entirely
          void of any plagiarism or replication.&#41;
        </h6>
        <div className="project-card-wrapper">
          <ProjectCard cardPosition={"start"} />
          <ProjectCard cardPosition={"end"} />
          <ProjectCard cardPosition={"start"} />
          {/* <motion.div initial="hidden" whileInView="visible"> */}
          <ProjectCard cardPosition={"end"} />
          {/* </motion.div> */}
        </div>
      </div>
      <img
        src={scrollImg}
        alt="scroller img"
        style={{ visibility: scrollerVisibility }}
      />
    </div>
  );
};

const ProjectCard = ({ cardPosition }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: " 20px",
      }}
    >
      <div className="project-card">
        <div className="img-half">
          <img src={project} alt="bomabay estates" />
        </div>
        <div className="project-description-half">
          <h2>Bombay Estates</h2>
          <p>
            Bombay Estates is a real estate website that provides a user
            friendly interface to businesses and individuals who are interested
            in buying, selling and even renting the real estate properties.
          </p>
          <div className="links-container">
            <a href="">
              Source Code &nbsp;
              <img src={github} alt="source code on github" height={"22px"} />
            </a>
            <a href="">
              Live Site &nbsp;
              <img src={redirect} alt="link to live site" height={"20px"} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
