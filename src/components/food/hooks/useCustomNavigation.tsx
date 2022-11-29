import React from "react";
import { useNavigate } from "react-router-dom";

export const useCustomNavigation = () => {
  const navigate = useNavigate();

  const handlePrevBtnClick = async (_event: React.MouseEvent, page: number) => {
    navigate(`/${page - 1}`);
  };

  const handleNextBtnClick = async (_event: React.MouseEvent, page: number) => {
    navigate(`/${page + 1}`);
  };

  const handlePageBtnClick = async (event: React.MouseEvent) => {
    const target = event.target as HTMLButtonElement;
    navigate(`/${target.innerHTML}`);
  };

  return {
    handlePrevBtnClick,
    handleNextBtnClick,
    handlePageBtnClick,
  };
};
