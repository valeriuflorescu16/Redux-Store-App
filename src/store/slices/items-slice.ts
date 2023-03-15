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
    removeItemFromCart: (state, action: PayloadAction<Item>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const items = [...state.items];
      items.splice(index, 1);

      state.items = items;
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: () => {
      return initialState;
    },
  },
});

export const itemsActions = itemsSlice.actions;
export default itemsSlice;
