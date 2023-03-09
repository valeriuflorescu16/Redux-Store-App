import React from "react";
import { CartItem, Item } from "../interfaces/ItemInterface";
import { AiFillDelete } from "react-icons/ai";

import "./CartItems.css";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { itemsActions } from "../store/slices/items-slice";

const cartItemsCounter = (items: Item[]) => {
  const cartItemsMap = new Map<Item, number>();

  items.forEach((item) => {
    const itemCount = cartItemsMap.get(item) || 0;
    cartItemsMap.set(item, itemCount + 1);
  });

  const cartItems: CartItem[] = [];
  cartItemsMap.forEach((count, item) => cartItems.push({ item, count }));

  cartItems.sort((a, b) => a.item.price - b.item.price);

  return cartItems;
};

const CartItems = () => {
  const dispatch = useAppDispatch();

  const items: Item[] = useAppSelector((state) => state.itemsReducer.items);
  const cartItems: CartItem[] = cartItemsCounter(items);

  return (
    <div className="items-container">
      {cartItems.map((cartItem) => (
        <div className="item" key={cartItem.item.id}>
          <span>{cartItem.item.name}</span>
          <div className="quantity-controls">
            <button
              onClick={() =>
                dispatch(itemsActions.removeItemFromCart(cartItem.item))
              }
            >
              -
            </button>
            <span>{cartItem.count}</span>
            <button
              onClick={() =>
                dispatch(itemsActions.addItemToCart(cartItem.item))
              }
            >
              +
            </button>
          </div>
          <span>£{cartItem.item.price.toFixed(2)}</span>
          <AiFillDelete
            className="delete-button"
            onClick={() => dispatch(itemsActions.deleteItem(cartItem.item.id))}
          />
        </div>
      ))}
    </div>
  );
};

export default CartItems;
