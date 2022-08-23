import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="container">
      <h1>404</h1>
      <h1>Cannot Find This Page</h1>
      <Link to="/">
        <button type="button">Back to Home</button>
      </Link>
    </div>
  );
};

export default Error;
