import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './slices/filters-slice';

import { setupListeners } from '@reduxjs/toolkit/query';
import { jobsApi } from './apis/jobs-api';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    [jobsApi.reducerPath]: jobsApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(jobsApi.middleware)
});

setupListeners(store.dispatch);

export { addFilter, removeFilter } from './slices/filters-slice';

export { useFetchJobsQuery } from './apis/jobs-api';
