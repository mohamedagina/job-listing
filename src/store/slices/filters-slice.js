import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: [],
  reducers: {
    addFilter: (state, action) => {
      state.push(action.payload);
    },
    removeFilter: (state, action) =>
      state.filter(filter => filter !== action.payload)
  }
});

export const filtersReducer = filtersSlice.reducer;
export const { addFilter, removeFilter } = filtersSlice.actions;
