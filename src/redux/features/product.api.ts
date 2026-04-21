import {baseApi} from '../api/baseApi';

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: '/shop/products',
        method: 'GET',
      }),
      providesTags: ['user'], // Using existing tag from baseApi
    }),
    getSingleProduct: builder.query({
      query: (id: string) => ({
        url: `/shop/products/${id}`,
        method: 'GET',
      }),
      providesTags: ['user'],
    }),
  }),
});

export const {useGetProductsQuery, useGetSingleProductQuery} = productApi;
