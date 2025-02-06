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
      query: () => ({
        url: '/services',
        method: 'POST',
      }),
      invalidatesTags: ['services'],
    }),
    updateUser: builder.mutation({
      query: payload => ({
        url: `/services/${payload.id}`,
        method: 'GET',
        body: payload.servicesInfo,
      }),
      invalidatesTags: ['services'],
    }),
  }),
});

export const { useGetAllServiceQuery } = serviceApi;
