import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  id: number;
  platform: string;
  url: string;
}

const initialState: InitialState = {
  id: Date.now(),
  platform: '',
  url: '',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setPlatform: (state, action: PayloadAction<string>) => {
      state.platform = action.payload;
    },

    setUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
  },
});

export const { setPlatform, setUrl } = uiSlice.actions;

export default uiSlice.reducer;
