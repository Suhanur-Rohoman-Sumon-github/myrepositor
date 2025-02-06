import { baseApi } from '../../baseApi/baseApi';

const serviceApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getAllService: builder.query({
      query: () => ({
        url: '/services',
        method: 'GET',
      }),
      providesTags: ['services'],
    }),
    createService: builder.mutation({
      query: serviceInfo => ({
        url: '/services',
        method: 'POST',
        body: serviceInfo,
      }),
      invalidatesTags: ['services'],
    }),
    updateservices: builder.mutation({
      query: payload => ({
        url: `/services/${payload.id}`,
        method: 'GET',
        body: payload.servicesInfo,
      }),
      invalidatesTags: ['services'],
    }),
  }),
});

export const {
  useGetAllServiceQuery,
  useCreateServiceMutation,
  useUpdateservicesMutation,
} = serviceApi;
