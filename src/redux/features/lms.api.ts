import { baseApi } from '../api/baseApi';
import { TProgram } from '@/types/program';
import { TClass, TClassCard } from '@/types/class';

const lmsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query<{ data: TProgram[] }, void>({
      query: () => '/lms/categories',
      providesTags: ['lms'],
    }),


    getClassesByCategory: builder.query<{ data: TClassCard[] }, string>({
      query: (categoryId) => `/lms/categories/${categoryId}/classes`,
      providesTags: (result, error, categoryId) => [{ type: 'lms' , id: categoryId }],
    }),

    
    getSingleClass: builder.query<{ data: TClass }, { categoryId: string; classId: string }>({
      query: ({ categoryId, classId }) => `/lms/categories/${categoryId}/classes/${classId}`,
      providesTags: (result, error, { classId }) => [{ type: 'lms', id: classId }],
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useGetClassesByCategoryQuery,
  useGetSingleClassQuery,
} = lmsApi;
