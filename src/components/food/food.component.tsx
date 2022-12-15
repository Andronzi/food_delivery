import React from "react";
import styles from "@components/food/food.module.scss";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import Button from "@components/ui/button/button.component";
import DishCard from "./items/dishCard.component";
import { usePages } from "./hooks/usePages";
// import { useDishes } from "./hooks/useDishes";
import { useCustomNavigation } from "./hooks/useCustomNavigation";
import Filters from "./filters/filters.component";
import { useAppDispatch } from "@redux/hooks/hooks";
import { fetchDishesWithSearchParams } from "@redux/slices/dishSlice";
import DishLoader from "@src/loaders/DishLoaders";
import { getCartDishes } from "@redux/slices/cartSlice";

const Food: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const data = useSelector((state: RootState) => state.dish);
  const dispatch = useAppDispatch();
  const { pages } = usePages(data);
  const { handlePrevBtnClick, handleNextBtnClick, handlePageBtnClick } =
    useCustomNavigation();

  React.useEffect(() => {
    // @ts-ignore
    console.log([...searchParams]);
    // @ts-ignore
    dispatch(fetchDishesWithSearchParams([...searchParams]));
    dispatch(getCartDishes(localStorage.getItem("token")!));
  }, [searchParams, setSearchParams]);

  if (!data.dishes) {
    return <DishLoader />;
  }

  return (
    <div>
      <Filters />
      <div className={styles.container}>
        {data.dishes.map(dish => (
          <DishCard
            key={dish.id}
            category={dish.category}
            description={dish.description}
            id={dish.id}
            name={dish.name}
            price={dish.price}
            rating={dish.rating}
            vegetarian={dish.vegetarian}
            src={dish.image}
          />
        ))}
      </div>

      <div className={styles.pages}>
        <Button
          backgroundColor="white"
          color="black"
          handleClick={(event: React.MouseEvent) => {
            // @ts-ignore
            handlePrevBtnClick(event, [...searchParams], setSearchParams);
          }}
          value="<"
          width="narrow"
        />

        <ul className={styles.pagesList}>
          {pages.map(pageNumber => (
            <li key={pageNumber}>
              <Button
                backgroundColor={`${
                  pageNumber == data.pagination?.current ? "black" : "white"
                }`}
                color={`${
                  pageNumber == data.pagination?.current ? "white" : "black"
                }`}
                handleClick={event =>
                  // @ts-ignore
                  handlePageBtnClick(event, [...searchParams], setSearchParams)
                }
                value={pageNumber}
                width="narrow"
              />
            </li>
          ))}
        </ul>

        <Button
          backgroundColor="white"
          color="black"
          handleClick={(event: React.MouseEvent) =>
            // @ts-ignore
            handleNextBtnClick(event, [...searchParams], setSearchParams)
          }
          value=">"
          width="narrow"
        />
      </div>
    </div>
  );
};

export default Food;
