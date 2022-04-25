import heroSlideData from "assets/fake-data/hero-slider";
import Helmet from "components/Helmet";
import HeroSlide from "features/HeroSlide";
import React from "react";

function Home(props) {
  return (
    <Helmet title="Trang chủ">
      <HeroSlide
        data={heroSlideData}
        control={true}
        auto={false}
        timeOut={5000}
      />
    </Helmet>
  );
}

Home.propTypes = {};

export default Home;
