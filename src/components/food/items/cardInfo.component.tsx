import React from "react";
import styles from "@components/food/food.module.scss";
import Button from "@components/ui/button/button.component";
import { useAppDispatch } from "@redux/hooks/hooks";
import { addDish } from "@redux/slices/cartSlice";

type CardInfoProps = {
  id: string;
  name: string;
  category: string;
  rating: number;
  price: number;
};

const CardInfo: React.FC<CardInfoProps> = ({
  id,
  name,
  category,
  rating,
  price,
}) => {
  const dispatch = useAppDispatch();
  const addToBasket = () => {
    dispatch(addDish(id));
  };
  return (
    <div className={styles.cardInfo}>
      <div className={styles.infoContainer}>
        <h2 className={styles.title}>{name}</h2>

        <p className={styles.category}>{category}</p>
      </div>

      <p style={{ display: "none" }}>{rating || 0}</p>

      <div className={styles.priceContainer}>
        <p className={styles.price}>{price}₽</p>

        <Button
          backgroundColor="red"
          color="white"
          onClick={addToBasket}
          value="В корзину"
        />
      </div>
    </div>
  );
};

export default CardInfo;
