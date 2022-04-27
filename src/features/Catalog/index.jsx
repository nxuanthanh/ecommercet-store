import category from "assets/fake-data/category";
import colors from "assets/fake-data/product-color";
import size from "assets/fake-data/product-size";
import productData from "assets/fake-data/products";
import Button from "components/Button";
import Checkbox from "components/Checkbox";
import InfinityList from "components/InfinityList";
import React, { useCallback, useEffect, useRef, useState } from "react";
import "./catalog.scss";

function Catalog(props) {
  const filterRef = useRef();
  const initFilter = {
    category: [],
    color: [],
    size: [],
  };

  const productList = productData.getAllProducts();

  const [products, setProducts] = useState(productList);
  const [filter, setFilter] = useState(initFilter);

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.categorySlug],
          });
          break;
        case "COLOR":
          setFilter({
            ...filter,
            color: [...filter.color, item.color],
          });
          break;
        case "SIZE":
          setFilter({
            ...filter,
            size: [...filter.size, item.size],
          });
          break;

        default:
          break;
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter(
            (e) => e !== item.categorySlug
          );
          setFilter({ ...filter, category: newCategory });
          break;

        case "COLOR":
          const newColor = filter.color.filter((e) => e !== item.color);
          setFilter({ ...filter, color: newColor });
          break;

        case "SIZE":
          const newSize = filter.size.filter((e) => e !== item.size);
          setFilter({ ...filter, size: newSize });
          break;

        default:
          break;
      }
    }
  };

  const clearFilter = () => {
    setFilter(initFilter);
  };

  const updateProduct = useCallback(() => {
    let temp = productList;

    if (filter.category.length > 0) {
      temp = temp.filter((e) => filter.category.includes(e.categorySlug));
    }

    if (filter.color.length > 0) {
      temp = temp.filter((e) => {
        return e.colors.find((color) => filter.color.includes(color));
      });
    }

    if (filter.size.length > 0) {
      temp = temp.filter((e) => {
        return e.sizes.find((size) => filter.size.includes(size));
      });
    }

    setProducts(temp);
  }, [productList, filter]);

  const toggleFilter = () => filterRef.current.classList.toggle("active");

  useEffect(() => {
    updateProduct();
  }, [updateProduct]);

  return (
    <div className="catalog">
      <div className="catalog__filter" ref={filterRef}>
        <div className="catalog__filter__close" onClick={toggleFilter}>
          <i className="bx bx-left-arrow-alt"></i>
        </div>
        <div className="catalog__filter__widget">
          <div className="catalog__filter__widget__title">
            Danh mục sản phẩm
          </div>

          <div className="catalog__filter__widget__content">
            {category.map((item, id) => (
              <div className="catalog__filter__widget__content__item" key={id}>
                <Checkbox
                  label={item.display}
                  onChange={(input) =>
                    filterSelect("CATEGORY", input.checked, item)
                  }
                  checked={filter.category.includes(item.categorySlug)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="catalog__filter__widget">
          <div className="catalog__filter__widget__title">Màu sắc</div>

          <div className="catalog__filter__widget__content">
            {colors.map((item, id) => (
              <div className="catalog__filter__widget__content__item" key={id}>
                <Checkbox
                  label={item.display}
                  onChange={(input) =>
                    filterSelect("COLOR", input.checked, item)
                  }
                  checked={filter.color.includes(item.color)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="catalog__filter__widget">
          <div className="catalog__filter__widget__title">Kích cỡ</div>

          <div className="catalog__filter__widget__content">
            {size.map((item, id) => (
              <div className="catalog__filter__widget__content__item" key={id}>
                <Checkbox
                  label={item.display}
                  onChange={(input) =>
                    filterSelect("SIZE", input.checked, item)
                  }
                  checked={filter.size.includes(item.size)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="catalog__filter__widget">
          <div className="catalog__filter__widget__content">
            <Button size="sm" onClick={clearFilter}>
              Xoá bộ lọc
            </Button>
          </div>
        </div>
      </div>
      <div className="catalog__filter__toggle">
        <Button size="sm" onClick={toggleFilter}>
          Bộ lọc
        </Button>
      </div>
      <div className="catalog__content">
        <InfinityList data={products} />
      </div>
    </div>
  );
}

Catalog.propTypes = {};

export default Catalog;
