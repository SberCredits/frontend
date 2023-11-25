import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@/api/authConfig/baseQuery";

export const apiService = createApi({
  baseQuery: baseQuery(),
  endpoints: () => ({}),
});
