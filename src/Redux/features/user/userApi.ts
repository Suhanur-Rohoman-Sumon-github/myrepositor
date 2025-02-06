import { baseApi } from '../../baseApi/baseApi';

const userApis = baseApi.injectEndpoints({
  endpoints: builder => ({
    signup: builder.mutation({
      query: userInfo => ({
        url: '/users',
        method: 'POST',
        body: userInfo,
      }),
    }),
    login: builder.mutation({
      query: userInfo => ({
        url: '/auth/login',
        method: 'POST',
        body: userInfo,
      }),
    }),
    deleteUser: builder.mutation({
      query: email => ({
        url: `/users/${email}`,
        method: 'put',
      }),
      invalidatesTags: ['user'],
    }),
    makeAdmin: builder.mutation({
      query: email => ({
        url: `/users/${email}`,
        method: 'patch',
      }),
      invalidatesTags: ['user'],
    }),
    getAllUser: builder.query({
      query: () => ({
        url: '/users',
        method: 'GET',
      }),
      providesTags: ['user'],
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useGetAllUserQuery,
  useDeleteUserMutation,
  useMakeAdminMutation,
} = userApis;
