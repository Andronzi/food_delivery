import React from "react";
import styles from "@components/food/food.module.scss";
import Button from "@components/ui/button/button.component";
import { useAppDispatch } from "@redux/hooks/hooks";
import { addDish } from "@redux/slices/cartSlice";
import StarRating from "./StarRating";
import { toast } from "react-hot-toast";

type CardInfoProps = {
  id: string;
  name: string;
  description: string;
  category: string;
  rating: number;
  price: number;
};

const CardInfo: React.FC<CardInfoProps> = ({
  id,
  name,
  description,
  category,
  rating,
  price,
}) => {
  const dispatch = useAppDispatch();
  const addToBasket = async () => {
    const basketResponse = await dispatch(
      addDish({ token: localStorage.getItem("token")!, dishId: id }),
    );

    if (basketResponse.type === "addDishToCart/rejected") {
      toast.error("Ошибка добавления в корзину", {
        duration: 1000,
        style: { fontFamily: "Montserrat" },
      });
    } else {
      toast.success("Товар успешно добавлен в корзину", {
        duration: 1000,
        style: { fontFamily: "Montserrat" },
      });
    }
  };
  return (
    <div className={styles.cardInfo}>
      <div className={styles.infoContainer}>
        <h2 className={styles.title}>{name}</h2>

        <p className={styles.category}>{category}</p>
      </div>

      <p style={{ display: "none" }}>{rating || 0}</p>

      <StarRating
        currentRating={rating}
        dishId={id}
      />

      <p className={styles.description}>{description}</p>

      <div className={styles.priceContainer}>
        <p className={styles.price}>{price}₽</p>

        <Button
          backgroundColor="red"
          color="white"
          handleClick={addToBasket}
          value="В корзину"
        />
      </div>
    </div>
  );
};

export default CardInfo;
