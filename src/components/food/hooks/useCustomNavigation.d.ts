import React from "react";
export declare const useCustomNavigation: () => {
    handlePrevBtnClick: (_event: React.MouseEvent, searchParams: URLSearchParams, setSearchParams: any) => Promise<void>;
    handleNextBtnClick: (_event: React.MouseEvent, searchParams: URLSearchParams, setSearchParams: any) => Promise<void>;
    handlePageBtnClick: (event: React.MouseEvent, searchParams: URLSearchParams, setSearchParams: any) => Promise<void>;
};
