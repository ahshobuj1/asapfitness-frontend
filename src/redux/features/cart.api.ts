import {baseApi} from '../api/baseApi';

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCart: builder.query({
      query: () => ({
        url: '/shop/cart',
        method: 'GET',
      }),
      providesTags: ['cart'],
    }),
    addToCart: builder.mutation({
      query: (data: {productId: string; quantity: number}) => ({
        url: '/shop/cart',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['cart'],
    }),
    removeFromCart: builder.mutation({
      query: (itemId: string) => ({
        url: `/shop/cart/${itemId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['cart'],
    }),
  }),
});

export const {useGetCartQuery, useAddToCartMutation, useRemoveFromCartMutation} =
  cartApi;
