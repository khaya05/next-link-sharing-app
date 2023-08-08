import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type Link = {
  platform: string;
  link: string; 
};

interface InitialState {
  firstName: string;
  lastName: string;
  email: string;
  profilePic: string;
  links: Link[]; 
}

const initialState: InitialState = {
  firstName: '',
  lastName: '',
  email: '',
  profilePic: '',
  links: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addLink: (state, action: PayloadAction<Link>) => {
      state.links.push(action.payload);
    },
  },
});

export const { addLink } = userSlice.actions;

export default userSlice.reducer;
