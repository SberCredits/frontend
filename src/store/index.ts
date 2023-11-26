import { configureStore } from "@reduxjs/toolkit";

import { authApi } from "@/api/authApi";
import { apiService } from "@/api/authConfig";
import { applicationApi } from "@/api/applicationApi";
// TODO конфликты мидлвеиров
import { apiService as applicationApiService } from "@/api/applicationConfig";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [applicationApi.reducerPath]: applicationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      applicationApiService.middleware,
      apiService.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
