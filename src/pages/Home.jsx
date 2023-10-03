import React from "react";
import Threedmodel from "../components/Threedmodel";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const redirectPage = (path) => {
    navigate(path);
  };

  return (
    <div className="home">
      <div className="homeText">
        <p>
          Hey,
          <br />
          My name is <span className="largeText">Kartik Bhardwaj</span>. <br />{" "}
          I am a <span className="largeText">Website Developer</span> by
          passsion <br /> and an{" "}
          <span className="largeText">Engineering Undergrad</span> by
          profession.
        </p>
        <ul>
          <li>
            <h5>Tech Stack | </h5>
          </li>
          <SkillIcon icon="mongodb" />
          <SkillIcon icon="express" />
          <SkillIcon icon="react" />
          <SkillIcon icon="nodejs" />
          <SkillIcon icon="bootstrap" />
          <SkillIcon icon="materialui" />
          <SkillIcon icon="github" />
          <SkillIcon icon="postman" />
        </ul>
        <div className="pagesBtn">
          <button
            className="primary-btn"
            onClick={() => {
              redirectPage("/projects");
            }}
          >
            View Projects
          </button>
          <button
            className="primary-btn"
            onClick={() => {
              redirectPage("/connect");
            }}
          >
            Connect With Me
          </button>
        </div>
      </div>
      <Threedmodel />
    </div>
  );
};

const SkillIcon = ({ icon }) => {
  return (
    <li>
      <img src={`https://skillicons.dev/icons?i=${icon}`} alt={`${icon}`} />
    </li>
  );
};

export default Home;
