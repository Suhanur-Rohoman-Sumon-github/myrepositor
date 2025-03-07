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
    getPaymentSecret: builder.mutation({
      query: price => ({
        url: '/payments',
        method: 'POST',
        body:  price ,
      }),
    }),
  }),
});

export const {
  useAddedToCartMutation,
  useGetAllCartQuery,
  useUpdateQuantityMutation,
  useGetPaymentSecretMutation
} = cartApis;
