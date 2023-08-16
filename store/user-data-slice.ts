import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import mongoose from 'mongoose';

type Link = {
  id: mongoose.Types.ObjectId;
  platform: string;
  link: string;
};

interface InitialState {
  id: mongoose.Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  profilePic: string;
  links: Link[];
}

const initialState: InitialState = {
  id: new mongoose.Types.ObjectId(),
  firstName: '',
  lastName: '',
  email: '',
  profilePic: '/images/profile-pic.jpg',
  links: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<InitialState>>) => {
      return { ...state, ...action.payload };
    },
    setUserProfile: (
      state,
      action: PayloadAction<{
        firstName: string;
        lastName: string;
        email: string;
      }>
    ) => {
      const { firstName, lastName, email } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
    },

    addLink: (state, action: PayloadAction<Link>) => {
      state.links.push(action.payload);
    },

    setPlatform: (state, action: PayloadAction<Partial<Link>>) => {
      const index = state.links.findIndex(
        (link) => link.id === action.payload.id
      );
      if (index !== -1) {
        state.links[index].platform = action.payload.platform!;
      }
    },

    setLink: (state, action: PayloadAction<Partial<Link>>) => {
      const index = state.links.findIndex(
        (link) => link.id === action.payload.id
      );
      if (index !== -1) {
        state.links[index].link = action.payload.link!;
      }
    },

    updateLinks: (state, action: PayloadAction<Link[]>) => {
      state.links = action.payload;
    },
  },
});

export const {
  setUser,
  setUserProfile,
  addLink,
  setPlatform,
  setLink,
  updateLinks,
} = userSlice.actions;

export default userSlice.reducer;
