import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://techtuend-service-server.vercel.app/api',
  credentials: 'include',
  // prepareHeaders: (headers, { getState }) => {
  //   const token = (getState() as RootState).auth.token;

  //   if (token) {
  //     headers.set('authorization', token);
  //   }
  // },
});
export const baseApi = createApi({
  reducerPath: 'baseUrl',
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
