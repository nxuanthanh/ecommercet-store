import Grid from "components/Grid";
import ProductCart from "features/Cart/ProductCart";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import "./infinity-list.scss";

function InfinityList(props) {
  const perLoad = 6;
  const listRef = useRef();

  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setData(props.data.slice(0, perLoad));
    setCurrentPage(1);
  }, [props.data]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (listRef && listRef.current) {
        if (
          window.scrollY + window.innerHeight >=
          listRef.current.clientHeight + listRef.current.offsetTop + 200
        ) {
          console.log("bottom reach");
          setLoad(true);
        }
      }
    });
  }, [listRef]);

  useEffect(() => {
    (() => {
      const pages = Math.floor(props.data.length / perLoad);
      const totalPage = props.data.length % perLoad === 0 ? pages : pages + 1;

      if (load && currentPage <= totalPage) {
        const start = perLoad * currentPage;
        const end = start + perLoad;

        setData(data.concat(props.data.slice(start, end)));
        setCurrentPage(currentPage + 1);
      }
    })();
    setLoad(false);
  }, [load, currentPage, data, props.data]);

  return (
    <div ref={listRef}>
      <Grid col={3} mdCol={2} smCol={1} gap={20}>
        {data.map((item, id) => (
          <ProductCart
            key={id}
            img1={item.image01}
            img2={item.image02}
            name={item.title}
            price={item.price}
            slug={item.slug}
          />
        ))}
      </Grid>
    </div>
  );
}

InfinityList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default InfinityList;
