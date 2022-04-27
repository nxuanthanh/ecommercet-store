import React, { useEffect } from "react";
import productData from "assets/fake-data/products";
import Helmet from "components/Helmet";
import Section, { SectionBody, SectionTitle } from "features/Section";
import Grid from "components/Grid";
import ProductCart from "features/Cart/ProductCart";
import { useParams } from "react-router-dom";
import ProductView from "./components/ProductView";

function Products(props) {
  const { slug } = useParams();
  const product = productData.getProductBySlug(slug);
  const relatedProducts = productData.getProducts(8);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={product.title}>
      <Section>
        <SectionBody>
          <ProductView product={product} />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Khám phá thêm</SectionTitle>
        <SectionBody>
          <Grid col={4} md={2} smCol={1} gap={20}>
            {relatedProducts.map((item, i) => (
              <ProductCart
                key={i}
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

Products.propTypes = {};

export default Products;
