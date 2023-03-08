import React, { FC } from "react";
import { useAppSelector } from "../hooks/redux-hooks";
import { CartItem, Item } from "../interfaces/ItemInterface";
import "./Modal.css";

const cartItemsCounter = (items: Item[]) => {
  const cartItemsMap = new Map<Item, number>();

  items.forEach((item) => {
    const itemCount = cartItemsMap.get(item) || 0;
    cartItemsMap.set(item, itemCount + 1);
  });

  const cartItems: CartItem[] = [];
  cartItemsMap.forEach((count, item) => cartItems.push({ item, count }));

  return cartItems;
};

const Modal: FC<{
  isOpen: boolean;
  onClose: () => void;
}> = (props) => {
  const items: Item[] = useAppSelector((state) => state.itemsReducer.items);
  const cartItems: CartItem[] = cartItemsCounter(items);

  const total = items.reduce((sum, item) => sum + item.price, 0);
  return (
    <>
      {props.isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Shopping Cart</h2>
              <button className="modal-close" onClick={props.onClose}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              {cartItems.map((cartItem) => (
                <div className="modal-item" key={cartItem.item.id}>
                  <span>{cartItem.item.name}</span>
                  <span>{cartItem.count}</span>
                  <span>${cartItem.item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="modal-footer">
              <span>Total:</span>
              <span>£{total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
