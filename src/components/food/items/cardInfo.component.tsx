import React from "react";
import styles from "@components/food/food.module.scss";

type CardInfoProps = {
  name: string;
  category: string;
  rating: number;
  price: number;
};

const CardInfo: React.FC<CardInfoProps> = ({
  name,
  category,
  rating,
  price,
}) => (
  <div className={styles.cardInfo}>
    <div className={styles.infoContainer}>
      <h2 className={styles.title}>{name}</h2>

      <p className={styles.category}>{category}</p>
    </div>

    <p style={{ display: "none" }}>{rating || 0}</p>

    <div className={styles.priceContainer}>
      <p>{price}₽</p>

      <button>В корзину</button>
    </div>
  </div>
);

export default CardInfo;
