import React from "react";
import { useSearchParams } from "react-router-dom";
import { assignFilters } from "../helpers/filter";
import Button from "./Button";
import styles from "./filters.scss";

const Filters: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams() as any;
  const [active, setActive] = React.useState() as any;
  const handleSelectChange = async (event: any) => {
    //@ts-ignore
    const params = await assignFilters([...searchParams]);
    params.sorting = event.target.value;
    setSearchParams(params);
  };

  const handleVeganClick = async () => {
    setActive((prevState: boolean) => !prevState);
    //@ts-ignore
  };

  React.useEffect(() => {
    //@ts-ignore
    assignFilters([...searchParams]).then(params => {
      //@ts-ignore
      params.vegetarian = active;
      console.log(params + "");
      setSearchParams(params);
    });
  }, [active]);

  React.useEffect(() => {
    //@ts-ignore
    assignFilters([...searchParams]).then(params => {
      console.log("paramsss" + params.vegetarian);
      //@ts-ignore
      if (params.vegetarian == "true") {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <Button
        value="Wok"
        title="Wok"
      />
      <Button
        value="Soup"
        title="Супы"
      />
      <Button
        value="Pizza"
        title="Пиццы"
      />
      <Button
        value="Dessert"
        title="Десерты"
      />
      <Button
        value="Drink"
        title="Напитки"
      />
      <button
        onClick={handleVeganClick}
        type="button"
        className={`${styles.button} ${active && styles.active}`}
        value="vegetarian">
        Веганское
      </button>
      <select
        onChange={handleSelectChange}
        className={styles.select}>
        <option value="NameAsc">по имени от А-Я</option>
        <option value="NameDesc">по имени от Я-А</option>
        <option value="PriceAsc">по возрастанию цены</option>
        <option value="PriceDesc">по убыванию цены</option>
        <option value="RatingAsc">по возрастанию рейтинга</option>
        <option value="RatingDesc">по убыванию рейтинга</option>
      </select>
    </div>
  );
};

export default Filters;
