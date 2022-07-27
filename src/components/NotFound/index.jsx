import React from "react";
import { Link } from "react-router-dom";

/**
 * Component that renders 404 page
 *
 * @returns {JSX.Element}
 */
const NotFound = () => {
  return (
    <article>
      <h1>Something Went Wrong</h1>
      <p>What you are looking for is no longer accessible.</p>
      <Link to="/">⬅️ Go back</Link>
    </article>
  );
};

export default NotFound;
