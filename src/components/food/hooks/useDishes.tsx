import { useAppDispatch } from "@redux/hooks/hooks";
import { fetchDishes } from "@redux/slices/dishSlice";
import React from "react";
import { useSearchParams } from "react-router-dom";

export const useDishes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (searchParams.get("page") === null) {
      setSearchParams({ page: "1" });
    }
    // @ts-ignore
    console.log([...searchParams]);
    // @ts-ignore
    dispatch(fetchDishes([...searchParams]));
  }, [searchParams, setSearchParams]);
};
