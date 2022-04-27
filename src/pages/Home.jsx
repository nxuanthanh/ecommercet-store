import heroSlideData from "assets/fake-data/hero-slider";
import policy from "assets/fake-data/policy";
import Grid from "components/Grid";
import Helmet from "components/Helmet";
import PolicyCart from "features/Cart/PolicyCart";
import HeroSlide from "features/HeroSlide";
import Section, { SectionBody, SectionTitle } from "features/Section";
import React from "react";
import { Link } from "react-router-dom";
import productData from "assets/fake-data/products";
import ProductCart from "features/Cart/ProductCart";
import banner from "assets/images/banner.png";
function Home(props) {
  const sellingProducts = productData.getProducts(4);
  const newProducts = productData.getProducts(8);
  const popularProducts = productData.getProducts(12);

  return (
    <Helmet title="Trang chủ">
      <HeroSlide
        data={heroSlideData}
        control={true}
        // auto={true}
        timeOut={5000}
      />
      <Section>
        <SectionBody>
          <Grid col={4} md={2} smCol={1} gap={20}>
            {policy.map((item, index) => (
              <Link to="policy" key={index}>
                <PolicyCart
                  name={item.name}
                  icon={item.icon}
                  description={item.description}
                />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle>Top sản phẩm bán chạy trong tuần</SectionTitle>
        <SectionBody>
          <Grid col={4} md={2} smCol={1} gap={20}>
            {sellingProducts.map((item, index) => (
              <ProductCart
                key={index}
                img1={item.image01}
                img2={item.image02}
                name={item.title}
                price={item.price}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Sản phẩm mới</SectionTitle>
        <SectionBody>
          <Grid col={4} md={2} smCol={1} gap={20}>
            {newProducts.map((item, index) => (
              <ProductCart
                key={index}
                img1={item.image01}
                img2={item.image02}
                name={item.title}
                price={item.price}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      <Section>
        <SectionBody>
          <Link to="catalog">
            <img src={banner} alt="banner" />
          </Link>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Phổ biến</SectionTitle>
        <SectionBody>
          <Grid col={4} md={2} smCol={1} gap={20}>
            {popularProducts.map((item, index) => (
              <ProductCart
                key={index}
                img1={item.image01}
                img2={item.image02}
                name={item.title}
                price={item.price}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
}

Home.propTypes = {};

export default Home;
