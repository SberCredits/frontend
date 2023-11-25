import { apiService } from "@/api/authConfig";
import { IAuthResponse } from "@/types/Auth";
import { generateRandomIP } from "@/helpers/generateRandomIP";

export const authApi = apiService.injectEndpoints({
  endpoints: (build) => ({
    token: build.mutation<IAuthResponse, FormData>({
      query: (data) => ({
        headers: {
          "X-LOCATION": generateRandomIP(),
        },
        url: "/token/",
        method: "POST",
        data,
      }),
    }),
  }),
});

export const { useTokenMutation } = authApi;
