import React from "react";
import plus from "@icons/add.svg";
import minus from "@icons/minus.svg";
import styles from "./cart.module.scss";
import { useCartRequests } from "./hooks/useCartRequests";

interface ButtonsProps {
  amount: number;
  dishId: string;
}

const Buttons: React.FC<ButtonsProps> = ({ amount, dishId }) => {
  const { requestDishDeletion, requestDishAddition } = useCartRequests();

  return (
    <div className={styles.buttons}>
      <img
        alt="Добавить"
        className={styles.plus}
        onClick={() => requestDishAddition(dishId)}
        src={plus}
      />
      <div className={styles.shadow}>{amount}</div>
      <img
        alt="Убрать"
        className={styles.minus}
        onClick={() => requestDishDeletion(dishId, true)}
        src={minus}
      />
    </div>
  );
};

export default Buttons;
