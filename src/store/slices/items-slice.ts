import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../../interfaces/ItemInterface";

interface itemsType {
  items: Item[];
}

const initialState: itemsType = {
  items: [],
};

const itemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<Item>) => {
      state.items = [...state.items, action.payload];
    },
  },
});

export const itemsActions = itemsSlice.actions;
export default itemsSlice;
