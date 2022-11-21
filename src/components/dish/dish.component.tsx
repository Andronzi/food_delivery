import React from "react";
import { useGetDishesQuery } from "@src/services/dish";

const Dish: React.FC = () => {
    const { data } = useGetDishesQuery({isVegetarian: false, pageNumber: 1});

    return (
        <div>
            <p>{data?.toString()}</p>
        </div>
    )
}

export default Dish;