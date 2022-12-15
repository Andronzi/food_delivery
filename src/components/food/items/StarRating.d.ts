import React from "react";
interface IRatingProps {
    dishId: string;
    currentRating: number;
}
declare const StarRating: React.FC<IRatingProps>;
export default StarRating;
