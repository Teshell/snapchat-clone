import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const appSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export const selectCount = (state) => state.counter.value;

export default appSlice.reducer;
