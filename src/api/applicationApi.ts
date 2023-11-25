import { apiService } from "@/api/applicationConfig";
import { IApplication } from "@/types/Application";
import { generateRandomIP } from "@/helpers/generateRandomIP";

export const applicationApi = apiService
  .enhanceEndpoints({
    addTagTypes: ["Applications"],
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getApplications: build.query<IApplication[], void>({
        query: () => ({
          headers: {
            "X-LOCATION": generateRandomIP(),
          },
          url: "/",
        }),
        providesTags: ["Applications"],
      }),
      setApplicationById: build.mutation<void, { id: string; data: FormData }>({
        query: ({ id, data }) => ({
          headers: {
            "X-LOCATION": generateRandomIP(),
          },
          method: "POST",
          url: `/status/${id}/set`,
          data,
        }),
        invalidatesTags: ["Applications"],
      }),
      checkApplicationById: build.query<void, string>({
        query: (id) => ({
          headers: {
            "X-LOCATION": generateRandomIP(),
          },
          url: `/status/${id}/check`,
        }),
      }),
    }),
  });

export const {
  useGetApplicationsQuery,
  useSetApplicationByIdMutation,
  useCheckApplicationByIdQuery,
} = applicationApi;
