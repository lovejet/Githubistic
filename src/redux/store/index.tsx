import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import searchQueryReducer from '@redux-reducers/search-query'
import repoListReducer from '@redux-reducers/repo-list'
import repoDetailReducer from '@redux-reducers/repo-detail'

export const store = configureStore({
  reducer: {
    searchQuery: searchQueryReducer,
    repoList: repoListReducer,
    repoDetail: repoDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>