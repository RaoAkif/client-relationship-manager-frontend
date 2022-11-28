import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: 0
  },
  reducers: {
    get: (state, action) => {

    },
    create: (state, action) => {
      state.value -= 1
    },
    update: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { get, create, update } = userSlice.actions

export default userSlice.reducer