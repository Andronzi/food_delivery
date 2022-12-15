import { useAppDispatch } from "@redux/hooks/hooks";
import { addRating, checkDishRating } from "@redux/slices/dishSlice";
import React from "react";
import { FaStar } from "react-icons/fa";
import styles from "./star.scss";

interface IRatingProps {
  dishId: string;
  currentRating: number;
}

const StarRating: React.FC<IRatingProps> = ({ currentRating, dishId }) => {
  const dispatch = useAppDispatch();
  const [rating] = React.useState(currentRating);
  const [hover, setHover] = React.useState(0);

  const handleRatingClick = async (value: number) => {
    const checkResponse = await dispatch(
      checkDishRating({ token: localStorage.getItem("token")!, id: dishId }),
    );

    if (checkResponse.payload) {
      await dispatch(
        addRating({
          token: localStorage.getItem("token")!,
          id: dishId,
          score: value,
        }),
      );
    }
  };

  return (
    <div className={styles.starsContainer}>
      {[...Array(10)].map((_, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleRatingClick(ratingValue)}
            />
            <FaStar
              size={15}
              color={ratingValue <= (hover || rating) ? "#ffc107" : "e4e5e9"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
