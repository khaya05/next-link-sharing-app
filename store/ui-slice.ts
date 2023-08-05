import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface InitialState {
  currentPage: 'LINKS' | 'PROFILE';
}

const initialState: InitialState = {
  currentPage: 'LINKS',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    changePage: (state) => {
      let currentState = state.currentPage;
      currentState === 'LINKS'
        ? (currentState = 'PROFILE')
        : (currentState = 'LINKS');
    },
  },
});

export const { changePage } = uiSlice.actions;

export default uiSlice.reducer;
