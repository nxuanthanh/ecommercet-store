import logo from 'assets/images/Logo-2.png';
import { cartCountSelector } from 'features/Cart/cartSelecor';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import './header.scss';

function Header(props) {
  const headerRef = useRef();
  const menuRef = useRef();

  const totalCart = useSelector(cartCountSelector);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('shrink');
      } else {
        headerRef.current.classList.remove('shrink');
      }
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  const menuToggle = () => {
    menuRef.current.classList.toggle('active');
  };

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <NavLink to="/">
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
                className={({ isActive }) => 'nav-link' + (isActive ? ' activated' : '')}
                to="/"
              >
                <span>Trang chủ</span>
              </NavLink>
            </div>
            <div className="header__menu__left__item header__menu__item">
              <NavLink
                onClick={menuToggle}
                className={({ isActive }) => 'nav-link' + (isActive ? ' activated' : '')}
                to="catalog"
              >
                <span>Sản phẩm</span>
              </NavLink>
            </div>
            <div className="header__menu__left__item header__menu__item">
              <NavLink
                onClick={menuToggle}
                className={({ isActive }) => 'nav-link' + (isActive ? ' activated' : '')}
                to="/accessories"
              >
                <span>Phụ kiện</span>
              </NavLink>
            </div>
            <div className="header__menu__left__item header__menu__item">
              <NavLink
                onClick={menuToggle}
                className={({ isActive }) => 'nav-link' + (isActive ? ' activated' : '')}
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
                className={({ isActive }) => 'nav-link' + (isActive ? ' activated' : '')}
                to="cart"
              >
                <div className="cart__box" data-duration={totalCart}>
                  <i className="bx bx-cart"></i>
                </div>
              </NavLink>
            </div>
            <div className="header__menu__right__item header__menu__item">
              <Link to="sign-in">
                <i className="bx bx-user"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {};

export default Header;
