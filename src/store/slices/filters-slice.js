import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: [],
  reducers: {
    addFilter: (state, action) => {
      if (state.includes(action.payload)) return state;
      state.push(action.payload);
    },
    removeFilter: (state, action) =>
      state.filter(filter => filter !== action.payload),
    clearFilters: () => []
  }
});

export const filtersReducer = filtersSlice.reducer;
export const { addFilter, removeFilter, clearFilters } = filtersSlice.actions;
