import React from "react";
import styles from "./dish.scss";

interface IDishProps {
  //   dishId: string;
  image: string;
  name: string;
  price: number;
  totalPrice: number;
  amount: number;
}

const OrderDish: React.FC<IDishProps> = ({
  //   dishId,
  image,
  name,
  price,
  totalPrice,
  amount,
}) => {
  return (
    <div className={styles.dish}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={styles.info}>
        <p className={styles.title}>{name}</p>
        <p className={styles.subtitle}>Цена: {price} ₽</p>
        <p className={styles.subtitle}>Количество: {amount} шт.</p>
      </div>
      <p className={styles.cost}>Стоимость: {totalPrice}₽</p>
    </div>
  );
};

export default OrderDish;
