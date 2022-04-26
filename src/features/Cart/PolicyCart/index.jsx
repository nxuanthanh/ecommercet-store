import React from "react";
import PropTypes from "prop-types";
import "./policy-cart.scss";

function PolicyCart({ icon, name, description }) {
  return (
    <div className="cart">
      <div className="cart__icon">
        <i className={icon}></i>
      </div>
      <div className="cart__info">
        <div className="cart__info__name">{name}</div>
        <div className="cart__info__description">{description}</div>
      </div>
    </div>
  );
}

PolicyCart.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PolicyCart;
