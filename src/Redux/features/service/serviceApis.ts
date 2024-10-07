import { baseApi } from '../../baseApi/baseApi';

const serviceApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getAllService: builder.query({
      query: () => ({
        url: '/services',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllServiceQuery } = serviceApi;
