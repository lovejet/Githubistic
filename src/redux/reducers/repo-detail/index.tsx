import axios from 'axios'
import { RootState } from '@redux-store'
import { GITHUB_API_DEVELOP_TOKEN } from '@constants'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { INTERFACE_REPO_DETAIL, INTERFACE_REJECT_VALUE, INTERFACE_REPO_INFO } from '@helpers/types'

const initialState: INTERFACE_REPO_DETAIL = {
  data: null,
  status: "idle",
  error: null,
};

export const fetchRepoDetail = createAsyncThunk<
  INTERFACE_REPO_INFO,
  string,
  { rejectValue: INTERFACE_REJECT_VALUE }
  >(
  'repoList/fetchRepoDetail',
  async (url: string, thunkApi) => {
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `token ${GITHUB_API_DEVELOP_TOKEN}`
      }
    })
    if (response.status !== 200) {
      // Return the error message:
      return thunkApi.rejectWithValue({ 
        message: "Failed to fetch repos." 
      })
    }
    return response.data
  }
)

export const repoDetail = createSlice({
  name: 'repoList',
  initialState,
  reducers: {
    reseRepoDetail: (state) => {
      state.status = 'idle'
      state.error = null
      state.data = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRepoDetail.pending, (state) => {
      state.status = "loading"
      state.error = null
    });
    builder.addCase(fetchRepoDetail.fulfilled, 
      (state, { payload }) => {
      state.data = payload
      state.status = "idle"
    });
    builder.addCase(fetchRepoDetail.rejected, 
      (state, { payload }) => {
      if (payload) state.error = payload.message
      state.status = "idle"
    });
  }
});

export const { reseRepoDetail } = repoDetail.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectRepoDetail = (state: RootState) => state.repoDetail

export default repoDetail.reducer
