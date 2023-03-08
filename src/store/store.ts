import { configureStore } from "@reduxjs/toolkit";
import animateSlice from "./slices/animate-slice";
import itemsSlice from "./slices/items-slice";

const store = configureStore({
  reducer: {
    itemsReducer: itemsSlice.reducer,
    animateReducer: animateSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
