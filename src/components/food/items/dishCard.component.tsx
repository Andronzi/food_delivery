import React from "react";
import styles from "@components/food/food.module.scss";
import CardInfo from "./cardInfo.component";

type DishCardProps = {
  id: string;
  src: string;
  name: string;
  rating: number;
  price: number;
  category: string;
};

const DishCard: React.FC<DishCardProps> = ({
  id,
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
      id={id}
      name={name}
      price={price}
      rating={rating}
    />
  </div>
);

export default DishCard;
