import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  animate: false,
};

const animateSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    animateCartButton: (state, action: PayloadAction<boolean>) => {
      state.animate = action.payload;
    },
  },
});

export const animateActions = animateSlice.actions;
export default animateSlice;
