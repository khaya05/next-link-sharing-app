import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  currentPage: string;
}


const initialState: InitialState = {
  currentPage: 'LINKS',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<string>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = uiSlice.actions;

export default uiSlice.reducer;
