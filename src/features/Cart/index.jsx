import productData from 'assets/fake-data/products';
import Button from 'components/Button';
import Helmet from 'components/Helmet';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatPrice } from 'utils';
import './cart.scss';
import CartItem from './CartItem';
function Cart(props) {
  const cartItems = useSelector((state) => state.cartItems.value);

  const [cartProducts, setCartProducts] = useState(productData.getCartItemsDetail(cartItems));

  const [totalProducts, setTotalProducts] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProducts(productData.getCartItemsDetail(cartItems));
    setTotalProducts(cartItems.reduce((total, curr) => total + Number(curr.quantity), 0));
    setTotalPrice(
      cartItems.reduce((total, curr) => total + Number(curr.quantity) * Number(curr.price), 0)
    );
  }, [cartItems]);

  return (
    <Helmet title="Giỏ hàng">
      <div className="cart">
        <div className="cart__list">
          {cartProducts.map((item, i) => (
            <CartItem cart={item} key={i} />
          ))}
        </div>
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>Bạn đang có {totalProducts} sản phẩm trong giỏ hàng</p>
          </div>
          <div className="cart__info__price">
            <span>Thành tiền</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
          <div className="cart__info__btn">
            <Button size="block">Đặt hàng</Button>
            <Link to="/catalog">
              <Button size="block">Tiếp tục mua hàng</Button>
            </Link>
          </div>
        </div>
      </div>
    </Helmet>
  );
}

Cart.propTypes = {};

export default Cart;
