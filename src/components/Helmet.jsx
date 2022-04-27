import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function Helmet({ title = '', children }) {
  document.title = `Yolo - ${title}`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <>{children}</>;
}

Helmet.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Helmet;
