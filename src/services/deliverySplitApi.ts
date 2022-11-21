import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const deliverySplitApi = createApi({
  reducerPath: "deliverySplitApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://food-delivery.kreosoft.ru/api",
  }),
  endpoints: () => ({}),
});
