import logo from "assets/images/Logo-2.png";
import Grid from "components/Grid";
import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

function Footer(props) {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className="footer__title">Tổng đài hổ trợ</div>
            <div className="footer__content">
              <p>
                Liên hệ đặt hàng <strong>(0763156709)</strong>
              </p>
              <p>
                Thắc mắc đơn hàng <strong>(0763156709)</strong>
              </p>
              <p>
                Góp ý, khiếu nại <strong>(0763156709)</strong>
              </p>
            </div>
          </div>
          <div>
            <div className="footer__title">Chăm sóc khách hàng</div>
            <div className="footer__content">
              <p>
                <Link to="about">Chính sách đổi trả</Link>
              </p>
              <p>
                <Link to="about">Chính sách bảo hành</Link>
              </p>
              <p>
                <Link to="about">Chính sách hoàn tiền</Link>
              </p>
            </div>
          </div>
          <div>
            <div className="footer__title">Chăm sóc khách hàng</div>
            <div className="footer__content">
              <p>
                <Link to="about">Giới thiệu</Link>
              </p>
              <p>
                <Link to="about">Liên hệ</Link>
              </p>
              <p>
                <Link to="about">Tuyển dụng</Link>
              </p>
              <p>
                <Link to="about">Tin tức</Link>
              </p>
              <p>
                <Link to="about">Hệ thống cửa hàng</Link>
              </p>
            </div>
          </div>
          <div className="footer__about">
            <p>
              <Link to="">
                <img src={logo} className="footer__logo" alt="" />
              </Link>
            </p>
            <p>
              Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng
              triệu người tiêu dùng Việt. Hãy cùng Yolo hướng đến một cuộc sống
              năng động tích cực hơn.
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
