import React, { useEffect, useState } from 'react';
import './product-view-modal.scss';
import productData from 'assets/fake-data/products';
import ProductView from '../ProductView';
import Button from 'components/Button';
import { remove } from 'features/Products/productSlice';
import { useDispatch, useSelector } from 'react-redux';

function ProductViewModal(props) {
  const dispatch = useDispatch();
  const productSlug = useSelector((state) => state.productModal.value);

  const [product, setProduct] = useState();

  const handleCloseClick = () => {
    dispatch(remove());
  };

  useEffect(() => {
    setProduct(productData.getProductBySlug(productSlug));
  }, [productSlug]);

  return (
    <div className={`product-view__modal ${product === undefined ? '' : 'active'}`}>
      <div className="product-view__modal__content">
        <ProductView product={product} />
        <div className="product-view__modal__content__close">
          <Button size="sm" onClick={handleCloseClick}>
            Đóng
          </Button>
        </div>
      </div>
    </div>
  );
}

ProductViewModal.propTypes = {};

export default ProductViewModal;
