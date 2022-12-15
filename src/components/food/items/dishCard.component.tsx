import React from "react";
import styles from "@components/food/food.module.scss";
import CardInfo from "./cardInfo.component";
import { useNavigate } from "react-router";
import brokkoli from "@icons/broccoli.png";

type DishCardProps = {
  id: string;
  src: string;
  name: string;
  description: string;
  rating: number;
  price: number;
  category: string;
  vegetarian: boolean;
};

const DishCard: React.FC<DishCardProps> = ({
  id,
  src,
  name,
  description,
  rating,
  price,
  category,
  vegetarian,
}) => {
  const navigate = useNavigate();
  const changeText = (description: string) => {
    if (description.length > 40) {
      return description.substring(0, 40) + "...";
    } else {
      return description + "...";
    }
  };
  return (
    <div className={styles.dish}>
      {vegetarian ? (
        <img
          style={{ position: "absolute", right: 5 + "px", top: 5 + "px" }}
          src={brokkoli}
          alt="Веган"
        />
      ) : null}
      <div
        onClick={() => navigate(`/item/${id}`)}
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
