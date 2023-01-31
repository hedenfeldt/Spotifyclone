import { configureStore } from "@reduxjs/toolkit";
import PlaylistReducer from "./playlistSlice";

export const store = configureStore({
  reducer: {
    playlist: PlaylistReducer,
  },
});
