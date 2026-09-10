import React from "react";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <div>
      <Link to="/">Home Page</Link>
      <br />

      <Link to="/about">About Page</Link>
    </div>
  );
}
