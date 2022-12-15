import React from "react";
type DishCardProps = {
    id: string;
    src: string;
    name: string;
    description: string;
    rating: number;
    price: number;
    category: string;
    vegetarian: boolean;
};
declare const DishCard: React.FC<DishCardProps>;
export default DishCard;
