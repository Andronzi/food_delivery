import React from "react";
import { useSearchParams } from "react-router-dom";
import { assignFilters } from "../helpers/filter";
import { useFilters } from "../hooks/useFilters";
import styles from "./filters.scss";

interface ButtonProps {
  value: string;
  title: string;
}

const Button: React.FC<ButtonProps> = ({ value, title }) => {
  const { addCategoryFilter } = useFilters();
  const [active, setActive] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    //@ts-ignore
    assignFilters([...searchParams]).then(params => {
      //@ts-ignore
      if (params.categories?.includes(value)) {
        setActive(true);
      }
    });
  }, []);

  const handleButtonClick = async (event: any) => {
    await addCategoryFilter(searchParams, setSearchParams, event.target.value);
    setActive(prevState => !prevState);
  };

  return (
    <button
      onClick={event => handleButtonClick(event)}
      type="button"
      className={`${styles.button} ${active && styles.active}`}
      value={value}>
      {title}
    </button>
  );
};

export default Button;
