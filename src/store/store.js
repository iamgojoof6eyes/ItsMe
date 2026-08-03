import { configureStore } from "@reduxjs/toolkit";
import viewerSlice from "./viewer";

const store = configureStore(
    {
        reducer: {
            viewer: viewerSlice,
        }
    }
)

export default store;