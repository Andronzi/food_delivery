import StarRating from "@components/food/items/StarRating";
import { useAppDispatch, useAppSelector } from "@redux/hooks/hooks";
import { fetchDish } from "@redux/slices/dishSlice";
import React from "react";
import { useParams } from "react-router";
import styles from "./dish.scss";

const DishComponent = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const currentDish = useAppSelector(state => state.dish.currentDish);

  React.useEffect(() => {
    dispatch(fetchDish(id || ""));
  }, [id, dispatch]);

  return (
    <div>
      {currentDish ? (
        <div className={styles.container}>
          <h2 className={styles.title}>{currentDish.name}</h2>
          <div className={styles.info}>
            <div className={styles.imageWrapper}>
              <div
                className={styles.image}
                style={{ backgroundImage: `url(${currentDish.image})` }}
              />
              <p className={styles.subtitle}>
                Категория блюда - {currentDish.category}
              </p>
              <p className={styles.subtitle}>
                {currentDish.vegetarian
                  ? "Вегетерианское"
                  : "Не вегетерианское"}
              </p>
              <p className={`${styles.subtitle} ${styles.description}`}>
                {currentDish.description}
              </p>
              <div className={styles.stars}>
                <StarRating
                  currentRating={currentDish.rating}
                  dishId={id || ""}
                />
              </div>
              <p className={styles.subtitle}>Цена: {currentDish.price}./шт</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DishComponent;
