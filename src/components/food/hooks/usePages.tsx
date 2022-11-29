import { IDishDto } from "@redux/slices/dishSlice";
import React from "react";

export const usePages = (data: IDishDto) => {
  const [pages, setPages] = React.useState([] as Array<number>);

  React.useEffect(() => {
    setPages(
      new Array(data.pagination?.count)
        .fill(0)
        .map((value, index) => value + index + 1) as Array<number>,
    );
  }, [data]);

  return { pages };
};
