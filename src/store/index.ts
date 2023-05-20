import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth.slice';
import chatsReducer from './chats/chats.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chats: chatsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
