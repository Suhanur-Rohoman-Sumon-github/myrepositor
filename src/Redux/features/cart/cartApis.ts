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
    deleteCart: builder.mutation({
      query: id => ({
        url: `/cart/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['cart'],
    }),
    deleteManyCart: builder.mutation({
      query: ids => ({
        url: `/cart/all/${ids}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['cart'],
    }),
    getAllCart: builder.query({
      query: email => ({
        url: `/cart/${email}`,
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
  useDeleteCartMutation,
  useDeleteManyCartMutation,
} = cartApis;
