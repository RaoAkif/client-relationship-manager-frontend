import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const registerUser = createAsyncThunk('user/register', async ({ name, username, email, password }, { rejectWithValue }) => {
  const userParams = { user: { name, username, email, password }}
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    await axios.post('http://localhost:3000/signup', userParams, config)
  } catch (error) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message)
    } else {
      return rejectWithValue(error.message)
    }
  }
})
    
//    In the code block above, we've taken the values from the register form and made a POST request to the register route using Axios. In the event of an error, thunkAPI.rejectWithValue sends the custom error message from the backend as a payload to the reducer. You may notice that the register API is called without referencing the server's base URL. This is possible with the proxy configuration existing in frontend/package.json.