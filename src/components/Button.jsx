import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px]
   text-primary bg-blue-gradient hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[10px] outline-none ${styles}`}>
    Get Started
  </button>
);

export default Button;
