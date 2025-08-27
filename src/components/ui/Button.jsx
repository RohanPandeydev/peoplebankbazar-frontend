// components/ui/Button.jsx
import React from "react";

const Button = ({
  children,
  onClick,
  variant = "outline",
  className = "",
  icon: Icon, // pass an icon component here
  iconPosition = "left",
  type = "button",
}) => {
  const baseStyles =
    "flex items-center gap-2 text-sm rounded-lg transition focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    outline: "border border-[#007AFF] bg-transparent text-[#007AFF] hover:bg-blue-50",
    primary: "bg-[#007AFF] text-white hover:bg-blue-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {Icon && iconPosition === "left" && <Icon fontSize={20} />}
      {children}
      {Icon && iconPosition === "right" && <Icon fontSize={20} />}
    </button>
  );
};

export default Button;
