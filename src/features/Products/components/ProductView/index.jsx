import Button from 'components/Button';
import { addItem } from 'features/Cart/cartItemSlice';
import { remove } from 'features/Products/productSlice';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from 'utils';
import './product-view.scss';

function ProductView({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [previewImg, setPreviewImg] = useState(product.image01);
  const [descriptionExpand, setDescriptionExpand] = useState(false);
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (type) => {
    if (type === 'plus') {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  const check = () => {
    if (color === undefined) {
      alert('Vui lòng chọn màu sắc!');
      return false;
    }

    if (size === undefined) {
      alert('Vui lòng chọn màu kích cỡ');
      return false;
    }

    return true;
  };

  const addToCart = () => {
    if (check()) {
      const action = addItem({
        slug: product.slug,
        color: color,
        size: size,
        quantity: quantity,
        price: product.price,
      });

      dispatch(action);
      alert('success');
    }
  };

  const goToCart = () => {
    if (check()) {
      const action = addItem({
        slug: product.slug,
        color: color,
        size: size,
        quantity: quantity,
        price: product.price,
      });

      dispatch(action);
      dispatch(remove());
      navigate('/cart');
    }
  };

  useEffect(() => {
    setPreviewImg(product.image01);
    setQuantity(1);
    setColor();
    setSize();
  }, [product]);

  return (
    <div className="product">
      <div className="product__images">
        <div className="product__images__list">
          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(product.image01)}
          >
            <img src={product.image01} alt="img" />
          </div>
          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(product.image02)}
          >
            <img src={product.image02} alt="img" />
          </div>
        </div>

        <div className="product__images__main">
          <img src={previewImg} alt="previewImg" />
        </div>
        <div className={`product__description ${descriptionExpand ? 'expand' : ''}`}>
          <div className="product__description__title">Chi tiết sản phẩm</div>
          <div
            className="product__description__content"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
          <div className="product__description__toggle">
            <Button size="sm" onClick={() => setDescriptionExpand(!descriptionExpand)}>
              {!descriptionExpand ? 'Xem thêm' : 'Thu gọn'}
            </Button>
          </div>
        </div>
      </div>
      <div className="product__info">
        <h1 className="product__info__title">{product.title}</h1>
        <div className="product__info__item">
          <span className="product__info__item__price">{formatPrice(product.price)}</span>
        </div>

        <div className="product__info__item">
          <div className="product__info__item__title">Màu sắc</div>
          <div className="product__info__item__list">
            {product.colors.map((item, i) => (
              <div
                key={i}
                onClick={() => setColor(item)}
                className={`product__info__item__list__item ${color === item ? 'active' : ''}`}
              >
                <div className={`circle bg-${item}`}></div>
              </div>
            ))}
          </div>
        </div>

        <div className="product__info__item">
          <div className="product__info__item__title">Kích cỡ</div>
          <div className="product__info__item__list">
            {product.sizes.map((item, i) => (
              <div
                key={i}
                onClick={() => setSize(item)}
                className={`product__info__item__list__item ${size === item ? 'active' : ''}`}
              >
                <span className="product__info__item__list__item__size">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="product__info__item">
          <div className="product__info__item__title">Số lượng</div>
          <div className="product__info__item__quantity">
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity('minus')}
            >
              <i className="bx bx-minus"></i>
            </div>
            <div className="product__info__item__quantity__input">{quantity}</div>
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity('plus')}
            >
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>
        <div className="product__info__item">
          <Button onClick={addToCart}>Thêm vào giỏ hàng</Button>
          <Button onClick={goToCart}>Mua ngay</Button>
        </div>
      </div>
      <div className={`product__description mobile ${descriptionExpand ? 'expand' : ''}`}>
        <div className="product__description__title">Chi tiết sản phẩm</div>
        <div
          className="product__description__content"
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></div>
        <div className="product__description__toggle">
          <Button size="sm" onClick={() => setDescriptionExpand(!descriptionExpand)}>
            {!descriptionExpand ? 'Xem thêm' : 'Thu gọn'}
          </Button>
        </div>
      </div>
    </div>
  );
}

ProductView.propTypes = {
  product: PropTypes.object.isRequired,
};

ProductView.defaultProps = {
  product: {
    price: 0,
    title: '',
    colors: [],
    sizes: [],
  },
};

export default ProductView;
