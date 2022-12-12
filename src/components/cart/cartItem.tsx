import React from "react";
import close from "@icons/delete.svg";
import { useCartRequests } from "./hooks/useCartRequests";
import styles from "./cart.module.scss";
import Buttons from "./buttons";

interface ItemProps {
  dishId: string;
  image: string;
  name: string;
  price: number;
  amount: number;
}

const CartItem: React.FC<ItemProps> = ({
  dishId,
  image,
  name,
  price,
  amount,
}) => {
  const { requestDishDeletion } = useCartRequests();
  return (
    <div className={styles.cartItem}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={styles.info}>
        <p>{name}</p>
        <span>WOK</span>
        <p className={styles.price}>{price}₽</p>
      </div>
      <img
        alt="удалить все"
        className={styles.close}
        onClick={() => requestDishDeletion(dishId, false)}
        src={close}
      />
      <Buttons
        amount={amount}
        dishId={dishId}
      />
    </div>
  );
};

export default CartItem;
