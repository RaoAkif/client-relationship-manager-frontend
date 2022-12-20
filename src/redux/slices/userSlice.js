// import axios from 'axios';
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const signInEndpoint = 'https://jobs-api-06.herokuapp.com/api/v1/auth/login';
// const signUpEndpoint = 'https://jobs-api-06.herokuapp.com/api/v1/auth/register';

// export const signIn = createAsyncThunk('user/signIn', async (firstName) => {
//   const userParams = { user: { firstName } };
//   const { data } = await axios.post(signInEndpoint, userParams);
//   return data;
// });

// export const sum = () => 'from user reducer';

// export const signUp = createAsyncThunk('user/signUp', async ({ firstName, email, password }) => {
//   const userParams = { user: { firstName, email, password } };
//   const { data } = await axios.post(signUpEndpoint, userParams);
//   return data;
// });

// const initialState = {
//   firstName: null,
//   userId: null,
//   isLoading: false,
//   userToken: null,
//   success: false,

//   loading: false,
//   userInfo: {},
//   userToken: null,
//   error: null,
//   success: false,
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     logOutUser: (state) => {
//       state.firstName = null;
//       state.userId = null;
//       state.createdUser = null;
//     },
//   },
//   extraReducers: {
//     [signIn.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [signIn.fulfilled]: (state, action) => {
//       state.firstName = action.payload.firstName;
//       state.userId = action.payload.user_id;
//       state.isLoading = false;
//     },
//     [signIn.rejected]: (state) => {
//       state.isLoading = false;
//     },
//     [signUp.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [signUp.fulfilled]: (state, action) => {
//       state.firstName = action.payload.firstName;
//       state.userId = action.payload.user_id;
//       state.isLoading = false;
//       state.createdUser = true;
//     },
//     [signUp.rejected]: (state) => {
//       state.isLoading = false;
//     },
//   },
// });

// export const { logOutUser } = userSlice.actions;
// export default userSlice.reducer;







// userSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { registerUser } from '../actions/userActions'

const initialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    // register user
    [registerUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true // registration successful
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})
export default userSlice.reducer