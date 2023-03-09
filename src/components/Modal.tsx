import React, { FC } from "react";
import { useAppSelector } from "../hooks/redux-hooks";
import { Item } from "../interfaces/ItemInterface";
import CartItems from "./CartItems";
import "./Modal.css";

const Modal: FC<{
  isOpen: boolean;
  onClose: () => void;
}> = (props) => {
  const items: Item[] = useAppSelector((state) => state.itemsReducer.items);

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
            <CartItems />
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
