import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/statistics">Statistics</Link>
      <Link to="/appliedjobs">Applied Jobs</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  );
};

export default Header;
