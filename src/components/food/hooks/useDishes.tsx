import { useAppDispatch } from "@redux/hooks/hooks";
import { fetchDishes } from "@redux/slices/dishSlice";
import React from "react";

export const useDishes = (page: number) => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchDishes(page ? +page : 1));
  }, [dispatch, page]);
};
