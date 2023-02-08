import React from "react";

import BrandLogo from "images/amazon-logo.png";
import { Link } from "react-router-dom";

import "./Logo.scss";

function Logo({ country = "in" }) {
  return (
    <>
      <img className="logo__img" src={BrandLogo} alt="Amazon logo" />
      <span> .{country}</span>
    </>
  );
}

export default Logo;
