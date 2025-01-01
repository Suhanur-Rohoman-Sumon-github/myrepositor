import { baseApi } from '../../baseApi/baseApi';

const cartApis = baseApi.injectEndpoints({
  endpoints: builder => ({
    getAllCart: builder.query({
      query: email => ({
        url: `/carts/${email}`,
        method: 'GET',
      }),
      providesTags: ['cart'],
    }),
    addedToCart: builder.mutation({
      query: cartInfo => ({
        url: '/carts',
        method: 'POST',
        body: cartInfo,
      }),
      invalidatesTags: ['cart'],
    }),
    updateQuantity: builder.mutation({
      query: cartInfo => ({
        url: `/carts/${cartInfo.id}`,
        method: 'PATCH',
        body: { quantity: cartInfo.quantity },
      }),
      invalidatesTags: ['cart'],
    }),
  }),
});

export const {
  useAddedToCartMutation,
  useGetAllCartQuery,
  useUpdateQuantityMutation,
} = cartApis;
