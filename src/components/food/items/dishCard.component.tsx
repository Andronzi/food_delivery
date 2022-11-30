import React from "react";
import styles from "@components/food/food.module.scss";
import CardInfo from "./cardInfo.component";

type DishCardProps = {
  src: string;
  name: string;
  rating: number;
  price: number;
  category: string;
};

const DishCard: React.FC<DishCardProps> = ({
  src,
  name,
  rating,
  price,
  category,
}) => (
  <div className={styles.dish}>
    <div
      className={styles.image}
      style={{ backgroundImage: `url(${src})` }}
    />

    <CardInfo
      category={category}
      name={name}
      price={price}
      rating={rating}
    />
  </div>
);

export default DishCard;
