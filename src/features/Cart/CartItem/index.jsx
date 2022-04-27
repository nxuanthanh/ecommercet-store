import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatPrice } from 'utils';
import { removeItem, updateItem } from '../components/ShoppingCart/cartItemSlice';

function CartItem({ cart }) {
  const dispatch = useDispatch();

  const [item, setItem] = useState(cart);

  const [quantity, setQuantity] = useState(cart.quantity);

  const updateQuantity = (opt) => {
    if (opt === '+') {
      dispatch(updateItem({ ...item, quantity: quantity + 1 }));
      //   setQuantity(quantity + 1);
    }
    if (opt === '-') {
      dispatch(updateItem({ ...item, quantity: quantity - 1 === 0 ? 1 : quantity - 1 }));
      //   setQuantity(quantity - 1 === 0 ? 1 : quantity - 1);
    }
  };

  const removeQuantity = () => {
    dispatch(removeItem(item));
  };

  useEffect(() => {
    setItem(cart);
    setQuantity(cart.quantity);
  }, [cart]);

  return (
    <div className="cart__item">
      <div className="cart__item__image">
        <img src={item.product.image01} alt="" />
      </div>
      <div className="cart__item__info">
        <div className="cart__item__info__name">
          <Link to={`/catalog/${item.slug}`}>
            {`${item.product.title} - ${item.color} - ${item.size}`}
          </Link>
        </div>

        <div className="cart__item__info__price">{formatPrice(item.product.price)}</div>
        <div className="cart__item__info__quantity">
          <div className="product__info__item__quantity">
            <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('-')}>
              <i className="bx bx-minus"></i>
            </div>
            <div className="product__info__item__quantity__input">{quantity}</div>
            <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('+')}>
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>
        <div className="cart__item__info__del" onClick={() => removeQuantity()}>
          <i className="bx bx-trash"></i>
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {};

export default CartItem;
