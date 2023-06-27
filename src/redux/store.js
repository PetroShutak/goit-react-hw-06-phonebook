import { configureStore } from "@reduxjs/toolkit";

import { createAction, createReducer } from "@reduxjs/toolkit";

const increment = createAction("increment");
const decrement = createAction("decrement");

const counterReducer = createReducer(0, {
    [increment]: (state, action) => state + action.payload,
    [decrement]: (state, action) => state - action.payload,
});

const store = configureStore({
    reducer: {
        myValue: counterReducer,},
});

export { store, increment, decrement };
//
