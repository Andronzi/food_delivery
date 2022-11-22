import React from "react";
import { useGetDishesQuery } from "@src/services/dish";

const Dish: React.FC = () => {
    const { data } = useGetDishesQuery({isVegetarian: false, pageNumber: 1});

    return (
        <div>
            {data && Object.keys(data).map(key => <p>{key}</p>)}
        </div>
    )
}

export default Dish;