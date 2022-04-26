import PropTypes from "prop-types";
import React from "react";
import "./button.scss";

function Button(props) {
  const { backgroundColor, size, icon, animate, onClick } = props;
  const bg = backgroundColor ? `bg-${backgroundColor}` : "bg-main";

  const btnSize = size ? `btn-${size}` : "";

  const btnAnimate = animate ? `btn-animate` : "";

  return (
    <button
      className={`btn ${bg} ${btnSize} ${btnAnimate}`}
      onClick={onClick ? () => onClick() : null}
    >
      <span className="btn__txt">{props.children}</span>
      {icon ? (
        <span className="btn__icon">
          <i className={`${icon} bx-tada`}></i>
        </span>
      ) : null}
    </button>
  );
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  animate: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
