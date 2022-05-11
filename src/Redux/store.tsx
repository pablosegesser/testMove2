import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authReducer";
// import { rootReducer } from "./reducers/rootReducer";

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});
