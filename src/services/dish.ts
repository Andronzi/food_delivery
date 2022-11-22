import { deliverySplitApi } from "./deliverySplitApi";
import type { IDishDto } from "./types/Dish";

const dishApi = deliverySplitApi.injectEndpoints({
    endpoints: (build) => ({
        getDishes: build.query<IDishDto, {isVegetarian: boolean, pageNumber: number }>({
            query: ({isVegetarian, pageNumber}) => ({
                url: `/dish?vegetarian=${isVegetarian}&page=${pageNumber}`,
                method: 'GET'
            })
        })
    })
})
export const { useGetDishesQuery } = dishApi;