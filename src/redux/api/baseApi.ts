import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {RootState} from '../store';
import {logout} from '../features/authSlice';

const BASE_URL = 'https://galilea-subcarinated-overscrupulously.ngrok-free.dev';

const baseQuery = fetchBaseQuery({
  baseUrl: `${BASE_URL}`,
  prepareHeaders: (headers, {getState}) => {
    // 1. Add the bypass header for ngrok
    headers.set('ngrok-skip-browser-warning', 'true');

    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    if (!(headers.get('Content-Type') || '').includes('multipart/form-data')) {
      headers.set('Accept', 'application/json');
    }

    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);

    //  Auto logout if token is invalid/expired
    if (result?.error?.status === 401 || result?.error?.status === 403) {
      api.dispatch(logout());
    }

    return result;
  },
  tagTypes: ['auth', 'user'],
  endpoints: () => ({}),
});
