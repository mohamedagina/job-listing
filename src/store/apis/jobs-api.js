import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const pause = duration => new Promise(resolve => setTimeout(resolve, duration));

export const jobsApi = createApi({
  reducerPath: 'jobs',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
    fetchFn: async (...args) => {
      await pause(2000);
      return fetch(...args);
    }
  }),
  endpoints: builder => ({
    fetchJobs: builder.query({
      query: () => ({
        url: '/data.json'
      })
    })
  })
});

export const { useFetchJobsQuery } = jobsApi;
