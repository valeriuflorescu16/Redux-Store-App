import React, { useEffect, useState } from "react";
import "./Header.css";
import { FaShoppingBasket } from "react-icons/fa";
import Modal from "./Modal";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { animateActions } from "../store/slices/animate-slice";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const animate = useAppSelector((state) => state.animateReducer.animate);

  useEffect(() => {
    if (animate) {
      const timeoutId = setTimeout(() => {
        dispatch(animateActions.animateCartButton(false));
      }, 500); // remove animation class after 500ms
      return () => clearTimeout(timeoutId);
    }
  }, [animate]);

  return (
    <div className="header-container">
      <img src="logo.svg" className="logo" alt="logo" />
      <header className="header">Redux Tech Store</header>
      <FaShoppingBasket
        className={`cart-icon ${animate ? "animate" : ""}`}
        onClick={() => setIsModalOpen(true)}
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Header;
