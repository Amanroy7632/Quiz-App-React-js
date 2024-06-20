import React from "react";

const Button = ({ children, className, onClick = (p) => {} }) => {
  return <button className={` px-4 py-2 rounded-sm duration-200 select-none ${className}`} onClick={onClick}>
    {children}
  </button>;
};

export default Button;
