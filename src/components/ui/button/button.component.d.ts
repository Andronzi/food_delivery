import React from "react";
interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: string;
    width?: string;
    background?: string;
    color?: string;
    backgroundColor?: string;
    borderRadius?: string;
    fontSize?: string;
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}
declare const Button: React.FC<IButtonProps>;
export default Button;
