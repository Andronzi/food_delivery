import React from "react";
import plus from "@icons/add.svg";
import minus from "@icons/minus.svg";
import styles from "./cart.module.scss";

interface ButtonsProps {
  amount: number;
}

const Buttons: React.FC<ButtonsProps> = ({ amount }) => (
  <div className={styles.buttons}>
    <img
      alt="Добавить"
      className={styles.plus}
      src={plus}
    />
    <button
      className={styles.shadow}
      type="button">
      {amount}
    </button>
    <img
      alt="Убрать"
      className={styles.minus}
      src={minus}
    />
  </div>
);

export default Buttons;
