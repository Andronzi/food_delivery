import React from "react";
import styles from "@components/food/food.module.scss";
import CardInfo from "./cardInfo.component";
import { useNavigate } from "react-router";

type DishCardProps = {
  id: string;
  src: string;
  name: string;
  description: string;
  rating: number;
  price: number;
  category: string;
};

const DishCard: React.FC<DishCardProps> = ({
  id,
  src,
  name,
  description,
  rating,
  price,
  category,
}) => {
  const navigate = useNavigate();
  const changeText = (description: string) => {
    if (description.length > 40) {
      return description.substring(1, 40) + "...";
    } else {
      return description + "...";
    }
  };
  return (
    <div
      className={styles.dish}
      onClick={() => navigate(`/item/${id}`)}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${src})` }}
      />

      <CardInfo
        category={category}
        id={id}
        description={changeText(description)}
        name={name}
        price={price}
        rating={rating}
      />
    </div>
  );
};

export default DishCard;
