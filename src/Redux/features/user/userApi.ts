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
  }),
});

export const { useSignupMutation, useLoginMutation } = userApis;
