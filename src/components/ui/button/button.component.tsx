import React from "react";
import styles from "./button.module.scss";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: string;
  width?: string;
  background?: string;
  color?: string;
  backgroundColor?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<IButtonProps> = ({
  value,
  handleClick,
  width,
  // size,
  backgroundColor,
  color,
  // size,
}) => {
  return (
    <button
      className={`${styles.button} ${
        width === "narrow" ? styles.width_narrow : styles.width_default
      } ${backgroundColor === "red" && styles.background_red} ${
        backgroundColor === "black" && styles.background_black
      }
      ${backgroundColor === "white" && styles.background_white}
      ${color === "white" && styles.color_white} ${
        color === "black" && styles.color_black
      }`}
      onClick={handleClick}
      type="button">
      {value}
    </button>
  );
};

export default Button;
