import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { postsPortion } from '../consts';

type PostType = {userId : number, id : number, body : string, title : string}

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_API_URL}),
  endpoints: (builder) => ({
    getPosts: builder.query<PostType[], { page: number}>({
      query: ({ page = 1}) => `posts?_limit=${postsPortion}&_page=${page}`,
    }),
    getAboutPost: builder.query<PostType, { id: number}>({
      query: ({id}) => `posts/${id}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetAboutPostQuery} = postsApi;