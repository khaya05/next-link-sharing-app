import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import ui from './ui-slice';
import user from './user-data-slice';
import link from './link-slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    ui,
    user,
    link
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
