import React from "react";
import { FaStar } from "react-icons/fa";
import styles from "./star.scss";

interface IRatingProps {
  currentRating: number;
}

const StarRating: React.FC<IRatingProps> = ({ currentRating }) => {
  const [rating, setRating] = React.useState(currentRating);
  const [hover, setHover] = React.useState(0);
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
              onClick={() => setRating(ratingValue)}
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
