import React from "react";
import close from "@icons/delete.svg";
import styles from "./cart.module.scss";
import Buttons from "./buttons";

interface ItemProps {
  image: string;
  name: string;
  price: number;
  amount: number;
}

const CartItem: React.FC<ItemProps> = ({ image, name, price, amount }) => (
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
      src={close}
    />
    <Buttons amount={amount} />
  </div>
);

export default CartItem;
