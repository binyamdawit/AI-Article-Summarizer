import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { articleApi } from "./article";

export const store = configureStore({
  // grab what you need
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
});
