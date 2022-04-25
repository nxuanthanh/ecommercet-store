import React from "react";
import PropTypes from "prop-types";

function Grid(props) {
  const { col, mdCol, smCol, gap, children } = props;

  const column = col ? `grid-col-${col}` : "";
  const mdColumn = mdCol ? `grid-col-${mdCol}` : "";
  const smColumn = smCol ? `grid-col-${smCol}` : "";

  return (
    <div
      className={`grid ${column} ${mdColumn} ${smColumn}`}
      style={{ gap: gap ? `${gap}px` : "0" }}
    >
      {children}
    </div>
  );
}

Grid.propTypes = {
  col: PropTypes.number,
  mdCol: PropTypes.number,
  smCol: PropTypes.number,
  gap: PropTypes.number,
};

export default Grid;
