import axios from "axios";
import { RootState } from "@redux-store";
import { GITHUB_API_DEVELOP_TOKEN } from "@constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  INTERFACE_REPO_LIST,
  INTERFACE_REJECT_VALUE,
  INTERFACE_REPO_RESPONSE,
} from "@helpers/types";

const initialState: INTERFACE_REPO_LIST = {
  data: [],
  total: 0,
  status: "idle",
  error: null,
};

export const fetchRepos = createAsyncThunk<
  INTERFACE_REPO_RESPONSE,
  string,
  { rejectValue: INTERFACE_REJECT_VALUE }
>("repoList/fetchRepos", async (url: string, thunkApi) => {
  const response = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${GITHUB_API_DEVELOP_TOKEN}`,
    },
  });
  if (response.status !== 200) {
    // Return the error message:
    return thunkApi.rejectWithValue({
      message: "Failed to fetch repos.",
    });
  }
  return response.data;
});

export const repoList = createSlice({
  name: "repoList",
  initialState,
  reducers: {
    reseRepoList: (state) => {
      state.status = "idle";
      state.error = null;
      state.total = 0;
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRepos.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchRepos.fulfilled, (state, { payload }) => {
      state.data = payload.items;
      state.total = payload.total_count;
      state.status = "idle";
    });
    builder.addCase(fetchRepos.rejected, (state, { payload }) => {
      if (payload) state.error = payload.message;
      state.status = "idle";
    });
  },
});

export const { reseRepoList } = repoList.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectRepoList = (state: RootState) => state.repoList;

export default repoList.reducer;
