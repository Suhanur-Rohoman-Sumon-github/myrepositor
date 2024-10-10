import { baseApi } from '../../baseApi/baseApi';

const orderApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    order: builder.mutation({
      query: orderInof => ({
        url: '/orders',
        method: 'POST',
        body: orderInof,
      }),
      invalidatesTags: ['order'],
    }),
  }),
});

export const { useOrderMutation } = orderApi;
