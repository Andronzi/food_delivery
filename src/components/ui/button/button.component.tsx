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
}) => (
  <button
    className={`${styles.button} ${
      width === "narrow" ? styles.width_narrow : styles.width_default
    } ${
      backgroundColor === "red"
        ? styles.background_red
        : styles.background_default
    } ${color === "white" ? styles.color_white : styles.color_default}`}
    onClick={handleClick}
    type="button">
    {value}
  </button>
);

export default Button;
