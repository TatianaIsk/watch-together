import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type User = {
  email: string | null;
  token: string | null;
  id: string | null;
};

const initialState = {
  email: null,
  token: null,
  id: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<User>) => ({
      ...state,
      ...payload,
    }),
    removeUser: () => ({
      ...initialState,
    }),
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
