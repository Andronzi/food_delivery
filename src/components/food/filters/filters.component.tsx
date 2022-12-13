import React from "react";
import { useSearchParams } from "react-router-dom";
import { assignFilters } from "../helpers/filter";
import Button from "./Button";
import styles from "./filters.scss";

const Filters: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams() as any;
  const handleSelectChange = async (event: any) => {
    //@ts-ignore
    const params = await assignFilters([...searchParams]);
    params.sorting = event.target.value;
    setSearchParams(params);
  };
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
        title="Диссерты"
      />
      <Button
        value="Drink"
        title="Напитки"
      />
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
