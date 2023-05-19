import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaExclamationTriangle, FaArrowRight } from "react-icons/fa";

const Error = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(redirectTimeout);
  }, [navigate]);

  return (
    <div className="error-page">
      <div className="message">
        <div className="icon">
          <FaExclamationTriangle />
        </div>
        <span>Page not found!</span>
      </div>
      <Link className="error-link" to="/">
        <span>Go to Home Page</span> <FaArrowRight />
      </Link>
    </div>
  );
};

export default Error;
