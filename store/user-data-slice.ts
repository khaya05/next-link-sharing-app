import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type Link = {
  id: string;
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
  profilePic: '/images/profile-pic.jpg',
  links: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
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

    removeLink: (state, action: PayloadAction<string>) => {
      const index = state.links.findIndex((link) => link.id === action.payload);
      if (index !== -1) {
        state.links = state.links.filter((link) => link.id !== action.payload);
      }
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
  setUserProfile,
  addLink,
  removeLink,
  setPlatform,
  setLink,
  updateLinks,
} = userSlice.actions;

export default userSlice.reducer;
