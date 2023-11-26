import { apiService } from "@/api/applicationConfig";
import { ApplicationModel, IApplication } from "@/types/Application";
import { generateRandomIP } from "@/helpers/generateRandomIP";

export const applicationApi = apiService
  .enhanceEndpoints({
    addTagTypes: ["Applications"],
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getApplications: build.query<
        IApplication[],
        { order_by: string | undefined; application_id__istartswith: string }
      >({
        query: ({ order_by, application_id__istartswith }) => ({
          headers: {
            "X-LOCATION": generateRandomIP(),
          },
          url: "/",
          params: {
            application_id__istartswith,
            order_by: order_by || "-status",
          },
        }),
        providesTags: ["Applications"],
      }),
      getApplicationByID: build.query<ApplicationModel, string | undefined>({
        query: (id) => ({
          headers: {
            "X-LOCATION": generateRandomIP(),
          },
          url: `/${id}`,
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
  useGetApplicationByIDQuery,
  useCheckApplicationByIdQuery,
} = applicationApi;
