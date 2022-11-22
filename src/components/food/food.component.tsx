import React from "react";
import { useGetDishesQuery } from "@src/services/dish";
import styles from "@components/food/food.module.scss";
import DishCard from "./items/dishCard.component";

const Food: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const { data, error, isLoading } = useGetDishesQuery({
    isVegetarian: false,
    pageNumber: page,
  });

  const handleNextBtnClick = () => {
    setPage(prevState => prevState + 1);
  };

  if (error) {
    return <p>Error</p>;
  }

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (!data) {
    return <div>No dishes</div>;
  }

  return (
    <div>
      <div className={styles.container}>
        {data.dishes.map(dish => (
          <DishCard
            category={dish.category}
            name={dish.name}
            price={dish.price}
            rating={dish.rating}
            src={dish.image}
          />
        ))}
      </div>

      <button
        onClick={handleNextBtnClick}
        type="button">
        next
      </button>
    </div>
  );
};

export default Food;
