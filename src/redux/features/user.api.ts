import {baseApi} from '../api/baseApi';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => ({
        url: '/users/me',
        method: 'GET',
      }),
      providesTags: ['user'],
    }),
  }),
});

export const {useGetMeQuery} = userApi;
