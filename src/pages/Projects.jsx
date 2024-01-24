import React, { Suspense, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Links from "../components/Links";
import project from "../assets/project.png";
import Coinstein from "../assets/Coinstein.png";
import notes from "../assets/notes.png";
import bookish from "../assets/bookish.png";
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

  const mouseRef = useRef();

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
          <ProjectCard
            cardPosition={"start"}
            title="Bombay Estates"
            desc="Bombay Estates is a real estate website that provides a user
            friendly interface to businesses and individuals who are interested
            in buying, selling and even renting the real estate properties."
            git="https://github.com/DevKartikBhardwaj/bombayestates"
            live="https://bombayestates-bkta86j4k-devkartikbhardwaj.vercel.app/"
            img={project}
            imgClass={"img1"}
          />
          <ProjectCard
            cardPosition={"end"}
            title="Coinstein"
            desc="A cryptocurrency data provider website is a platform that offers
             a wide range of data and information related to cryptocurrencies. These 
             websites are valuable resources for traders or anyone interested in cryptocurrencies."
            git="https://github.com/DevKartikBhardwaj/coinstein"
            live="https://coinstein.vercel.app/"
            img={Coinstein}
            imgClass={"img2"}
          />
{/*           <ProjectCard
            cardPosition={"start"}
            title="Notes"
            desc="A cryptocurrency data provider website is a platform that offers
             a wide range of data and information related to cryptocurrencies. These 
             websites are valuable resources for traders or anyone interested in cryptocurrencies."
            git="https://github.com/DevKartikBhardwaj/notes-client"
            live="https://notes-client-rho.vercel.app/"
            img={notes}
            imgClass={"img3"}
          /> */}
          <ProjectCard
            cardPosition={"start"}
            title="Bookish"
            desc="A cryptocurrency data provider website is a platform that offers
             a wide range of data and information related to cryptocurrencies. These 
             websites are valuable resources for traders or anyone interested in cryptocurrencies."
            git="https://github.com/DevKartikBhardwaj/bookish"
            live="https://bookish-8avz.onrender.com/"
            img={bookish}
            imgClass={"img4"}
          />
          {/* <ProjectCard cardPosition={"end"} />
          <ProjectCard cardPosition={"start"} /> */}
          {/* <motion.div initial="hidden" whileInView="visible"> */}
          {/* <ProjectCard cardPosition={"end"} /> */}
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

const ProjectCard = ({
  cardPosition,
  title,
  desc,
  git,
  live,
  img,
  imgClass,
}) => {
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
          <img src={img} alt="bomabay estates" className={imgClass} />
        </div>
        <div className="project-description-half">
          <h2>{title}</h2>
          <p>{desc}</p>
          <div className="links-container">
            <a href={git} target="_blank">
              Source Code &nbsp;
              <img src={github} alt="source code on github" height={"22px"} />
            </a>
            <a href={live} target="_blank">
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
