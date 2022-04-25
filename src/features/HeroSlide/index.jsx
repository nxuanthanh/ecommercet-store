import Button from "components/Button";
import PropTypes from "prop-types";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./hero-slide.scss";

function HeroSlide({
  data = [],
  control = false,
  auto = false,
  timeOut = null,
}) {
  const [activeSlide, setActiveSlide] = useState(0);

  const timeout = timeOut ? timeOut : 3000;

  const prevSlide = () => {
    const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1;
    setActiveSlide(index);
  };

  const nextSlide = useCallback(() => {
    const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1;
    setActiveSlide(index);
  }, [activeSlide, data]);

  useEffect(() => {
    if (auto) {
      const slideAuto = setInterval(() => {
        nextSlide();
      }, timeout);
      return () => {
        clearInterval(slideAuto);
      };
    }
  }, [nextSlide, timeout, auto]);

  return (
    <div className="hero-slide">
      {data.map((item, id) => (
        <HeroSlideItem key={id} item={item} active={id === activeSlide} />
      ))}
      {control ? (
        <div className="hero-slide__control">
          <div className="hero-slide__control__item" onClick={prevSlide}>
            <i className="bx bx-chevron-left"></i>
          </div>
          <div className="hero-slide__control__item">
            <div className="index">
              {activeSlide + 1}/{data.length}
            </div>
          </div>
          <div className="hero-slide__control__item" onClick={nextSlide}>
            <i className="bx bx-chevron-right"></i>
          </div>
        </div>
      ) : null}
    </div>
  );
}

HeroSlide.propTypes = {
  data: PropTypes.array,
  control: PropTypes.bool,
  auto: PropTypes.bool,
  timeOut: PropTypes.number,
};

function HeroSlideItem({ item, active }) {
  return (
    <div className={`hero-slide__item ${active ? "active" : ""}`}>
      <div className="hero-slide__item__info">
        <div className={`hero-slide__item__info-title color-${item.color}`}>
          <span>{item.title}</span>
        </div>
        <div className="hero-slide__item__info-description">
          <span>{item.description}</span>
        </div>
        <div className="hero-slide__item__info-btn">
          <Link to={item.path}>
            <Button
              backgroundColor={item.color}
              icon="bx bx-cart"
              animate={true}
              //   size="md"
            >
              Xem chi tiết
            </Button>
          </Link>
        </div>
      </div>
      <div className="hero-slide__item__image">
        <div className={`shape bg-${item.color}`}></div>
        <img src={item.img} alt="" />
      </div>
    </div>
  );
}

export default HeroSlide;
