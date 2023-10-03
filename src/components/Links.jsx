import React from "react";
import { Link } from "react-router-dom";

const Links = ({ name }) => {
  return (
    <div className="links">
      <p>
        <Link to={"/"}>Home</Link> / <Link>{name}</Link>
      </p>
    </div>
  );
};

export default Links;
