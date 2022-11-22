import React from "react";
import { useGetDishesQuery } from "@src/services/dish";

const Dish: React.FC = () => {
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
      {data.dishes.map(dish => (
        <p>{dish.name}</p>
      ))}

      <button
        onClick={handleNextBtnClick}
        type="button">
        next
      </button>
    </div>
  );
};

export default Dish;
