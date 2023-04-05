import { configureStore } from "@reduxjs/toolkit";
import { GameSlice } from "./gameSlice";

const store = configureStore({
    reducer: GameSlice,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});

export default store;