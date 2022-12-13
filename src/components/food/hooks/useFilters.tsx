// import React from "react";

export const useFilters = () => {
  const addCategoryFilter = async (
    searchParams: any,
    setFilter: any,
    value: string,
  ) => {
    let categories = [];
    for (const entry of searchParams.entries()) {
      if (entry[0] === "categories") {
        categories.push(entry[1]);
      }
    }

    if (!categories.includes(value)) categories.push(value);
    else {
      categories = categories.filter(category => category !== value);
    }
    return setFilter({
      page: 1,
      categories: categories,
      vegetarian: searchParams.get("vegetarian") || false,
    });
  };

  return {
    addCategoryFilter,
  };
};
