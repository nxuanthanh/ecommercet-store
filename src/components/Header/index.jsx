import React, { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./header.scss";
import logo from "assets/images/Logo-2.png";

function Header(props) {
  const { pathname } = useLocation();
  const headerRef = useRef();
  const menuRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const menuToggle = () => {
    menuRef.current.classList.toggle("active");
  };

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <NavLink
            className={({ isActive }) =>
              "nav-link" + (isActive ? " activated" : "")
            }
            to="/"
          >
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="header__menu">
          <div className="header__menu__mobile--toggle" onClick={menuToggle}>
            <i className="bx bx-menu-alt-left"></i>
          </div>
          <div className="header__menu__left" ref={menuRef}>
            <div className="header__menu__left__close" onClick={menuToggle}>
              <i className="bx bx-chevron-left"></i>
            </div>
            <div className="header__menu__left__item header__menu__item">
              <NavLink
                onClick={menuToggle}
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " activated" : "")
                }
                to="/"
              >
                <span>Trang chủ</span>
              </NavLink>
            </div>
            <div className="header__menu__left__item header__menu__item">
              <NavLink
                onClick={menuToggle}
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " activated" : "")
                }
                to="catalog"
              >
                <span>Sản phẩm</span>
              </NavLink>
            </div>
            <div className="header__menu__left__item header__menu__item">
              <NavLink
                onClick={menuToggle}
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " activated" : "")
                }
                to="/accessories"
              >
                <span>Phụ kiện</span>
              </NavLink>
            </div>
            <div className="header__menu__left__item header__menu__item">
              <NavLink
                onClick={menuToggle}
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " activated" : "")
                }
                to="/contact"
              >
                <span>Liên hệ</span>
              </NavLink>
            </div>
          </div>
          <div className="header__menu__right">
            <div className="header__menu__right__item header__menu__item">
              <i className="bx bx-search"></i>
            </div>
            <div className="header__menu__right__item header__menu__item">
              <NavLink
                onClick={menuToggle}
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " activated" : "")
                }
                to="cart"
              >
                <i className="bx bx-shopping-bag"></i>
              </NavLink>
            </div>
            <div className="header__menu__right__item header__menu__item">
              <i className="bx bx-user"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {};

export default Header;
