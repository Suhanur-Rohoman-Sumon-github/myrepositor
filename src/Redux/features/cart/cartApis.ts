import { baseApi } from '../../baseApi/baseApi';

const cartApis = baseApi.injectEndpoints({
  endpoints: builder => ({
    addedToCart: builder.mutation({
      query: cartInfo => ({
        url: '/cart',
        method: 'POST',
        body: cartInfo,
      }),
      invalidatesTags: ['cart'],
    }),
    updateQuantity: builder.mutation({
      query: cartInfo => ({
        url: `/cart/${cartInfo.id}`,
        method: 'PATCH',
        body: { quantity: cartInfo.quantity },
      }),
      invalidatesTags: ['cart'],
    }),
    getAllCart: builder.query({
      query: () => ({
        url: '/cart',
        method: 'GET',
      }),
      providesTags: ['cart'],
    }),
  }),
});

export const {
  useAddedToCartMutation,
  useGetAllCartQuery,
  useUpdateQuantityMutation,
} = cartApis;
