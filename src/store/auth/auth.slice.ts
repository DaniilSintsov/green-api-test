import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IAuthState extends ICredentials {
  isAuth: boolean;
}

interface ICredentials {
  idInstance: string;
  apiTokenInstance: string;
}

const initialState: IAuthState = {
  // isAuth: false,
  // idInstance: '',
  // apiTokenInstance: ''
  isAuth: true,
  idInstance: '1101822894',
  apiTokenInstance: '5a49c86e952743d69a8e295104b59da01c2dbe0805e34a9ea9'
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthorized: (state, credentials: PayloadAction<ICredentials>) => {
      state.idInstance = credentials.payload.idInstance;
      state.apiTokenInstance = credentials.payload.apiTokenInstance;
      state.isAuth = true;
    },
    setNotAuthorized: state => {
      state.isAuth = false;
      state.idInstance = '';
      state.apiTokenInstance = '';
    }
  }
});

export const { setAuthorized, setNotAuthorized } = authSlice.actions;
export default authSlice.reducer;
