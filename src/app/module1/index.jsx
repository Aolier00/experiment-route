import React from "react";
import { Link } from "react-router-dom";

export const Module1 = () => {
  return (
    <div>
      <p>Module 1</p>
      <Link to="/module2">Ir a modulo 2</Link>
    </div>
  );
};
