import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        users: userReducer,
        // Add other slices here    
    }

});

export const RootState = Return