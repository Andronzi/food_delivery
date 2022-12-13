import React from "react";
// import { useNavigate } from "react-router-dom";
import { assignFilters } from "../helpers/filter";

export const useCustomNavigation = () => {
  const handlePrevBtnClick = async (
    _event: React.MouseEvent,
    searchParams: URLSearchParams,
    setSearchParams: any,
  ) => {
    const params = await assignFilters(searchParams);
    if (params.page > 1) {
      params.page -= 1;
      setSearchParams(params);
    } else {
      setSearchParams(params);
    }
  };

  const handleNextBtnClick = async (
    _event: React.MouseEvent,
    searchParams: URLSearchParams,
    setSearchParams: any,
  ) => {
    const params = await assignFilters(searchParams);
    params.page += 1;
    setSearchParams(params);
  };

  const handlePageBtnClick = async (
    event: React.MouseEvent,
    searchParams: URLSearchParams,
    setSearchParams: any,
  ) => {
    const params = await assignFilters(searchParams);
    const target = event.target as HTMLButtonElement;
    params.page = +target.innerHTML;
    setSearchParams(params);
    // navigate(`/?page=${target.innerHTML}`);
  };

  return {
    handlePrevBtnClick,
    handleNextBtnClick,
    handlePageBtnClick,
  };
};
