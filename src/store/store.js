import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';

const userStore = configureStore({
  reducer: { users: userSlice },
});

export default userStore;
