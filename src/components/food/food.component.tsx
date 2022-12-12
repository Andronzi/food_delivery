import React from "react";
import styles from "@components/food/food.module.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import Button from "@components/ui/button/button.component";
import DishCard from "./items/dishCard.component";
import { usePages } from "./hooks/usePages";
import { useDishes } from "./hooks/useDishes";
import { useCustomNavigation } from "./hooks/useCustomNavigation";

const Food: React.FC = () => {
  const { page } = useParams();
  const data = useSelector((state: RootState) => state.dish);
  const { pages } = usePages(data);
  const { handlePrevBtnClick, handleNextBtnClick, handlePageBtnClick } =
    useCustomNavigation();

  const changePage = (pageNumber: string | undefined) => {
    if (typeof pageNumber === "string") {
      return +pageNumber;
    }

    return 1;
  };

  useDishes(changePage(page));

  if (!data.dishes) {
    return <div>No dishes</div>;
  }

  return (
    <div>
      <div className={styles.container}>
        {data.dishes.map(dish => (
          <DishCard
            key={dish.id}
            category={dish.category}
            id={dish.id}
            name={dish.name}
            price={dish.price}
            rating={dish.rating}
            src={dish.image}
          />
        ))}
      </div>

      <div className={styles.pages}>
        <Button
          backgroundColor="white"
          color="black"
          handleClick={(event: React.MouseEvent) => {
            handlePrevBtnClick(event, changePage(page));
          }}
          value="<"
          width="narrow"
        />

        <ul className={styles.pagesList}>
          {pages.map(pageNumber => (
            <li key={pageNumber}>
              <Button
                backgroundColor="white"
                color="black"
                handleClick={handlePageBtnClick}
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
            handleNextBtnClick(event, changePage(page))
          }
          value=">"
          width="narrow"
        />
      </div>
    </div>
  );
};

export default Food;
