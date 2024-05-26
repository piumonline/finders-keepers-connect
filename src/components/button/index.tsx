import React, { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button
      type="button"
      className="bg-twc-gray text-white py-[0.94rem] px-6 rounded-[0.9375rem] font-bold text-sm lg:text-base shrink"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
