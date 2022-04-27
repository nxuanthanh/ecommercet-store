import Button from 'components/Button';
import { add } from 'features/Products/productSlice';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatPrice } from 'utils';
import './product-cart.scss';

function ProductCart(props) {
  const { img1, img2, name, price, slug } = props;

  const dispatch = useDispatch();

  const handleBuyClick = () => {
    dispatch(add(slug));
  };

  return (
    <div className="product-cart">
      <Link to={`/catalog/${slug}`}>
        <div className="product-cart__image">
          <img src={img1} alt="img1" />
          <img src={img2} alt="img2" />
        </div>
        <h3 className="product-cart__name">{name}</h3>
        <div className="product-cart__price">
          {formatPrice(price)}
          <span className="product-cart__price--old">
            <del>{formatPrice(399000)}</del>
          </span>
        </div>
      </Link>
      <div className="product-cart__btn">
        <Button size="sm" icon="bx bx-cart" animate={true} onClick={handleBuyClick}>
          Chọn mua
        </Button>
      </div>
    </div>
  );
}

ProductCart.propTypes = {
  img1: PropTypes.string.isRequired,
  img2: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ProductCart;
