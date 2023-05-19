import React from "react";
import { Link } from "react-router-dom";
import {FaExclamationTriangle, FaArrowRight} from "react-icons/fa"


function Error() {
  return (
    <div className="error-page">
      <div className="message">
        <div className="icon">
          <FaExclamationTriangle/>
        </div>
        <span>Page not found!</span>
      </div>
      <Link className="error-link" to="/">
        <span>Go Home Page</span> <FaArrowRight/>
      </Link>
    </div>
  );
}

export default Error;
