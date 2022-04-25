import React from "react";
import PropTypes from "prop-types";

function Helmet({ title = "", children }) {
  document.title = `Yolo - ${title}`;
  return <div>{children}</div>;
}

Helmet.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Helmet;
