import React from 'react';
import { Link } from 'react-router-dom';
import './not-found.scss';

function NotFound(props) {
  return (
    <div className="not-found">
      <img
        src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
        alt="not-found"
        className="not-found__img"
      />
      <Link to="/" className="link-home">
        Go Home
      </Link>
    </div>
  );
}

NotFound.propTypes = {};

export default NotFound;
