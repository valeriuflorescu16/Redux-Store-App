import React, { FC } from "react";
import { useAppDispatch } from "../hooks/redux-hooks";
import { Item } from "../interfaces/ItemInterface";
import { animateActions } from "../store/slices/animate-slice";
import { itemsActions } from "../store/slices/items-slice";

import "./Menu.css";

const Menu: FC<{
  items: Item[];
}> = (props) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (item: Item) => {
    dispatch(itemsActions.addItemToCart(item));
  };

  return (
    <div className="card">
      <ul className="item-list">
        {props.items.map((item) => (
          <li key={item.id} className="item">
            <span className="item-name">{item.name}</span>
            <span className="item-price">£{item.price.toFixed(2)}</span>
            <button
              className="add-button"
              onClick={() => {
                dispatch(animateActions.animateCartButton(true));
                handleAddToCart(item);
              }}
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
