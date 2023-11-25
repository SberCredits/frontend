import { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosRequestConfig } from "axios";
import instance from "./instance";

export const baseQuery =
  <T>(): BaseQueryFn<AxiosRequestConfig, T> =>
  async (config: AxiosRequestConfig<T>) => {
    const { data } = await instance<T>(config);

    return { data };
  };
