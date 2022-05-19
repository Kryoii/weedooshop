import React from "react";
import Layout from "../../Components/Layout";
import ProductComponent from "./Product";
import Recommendation from "./recommendation";
import Client from "shopify-buy";
function Product(props) {
  return (
    <Layout title="Product">
      <ProductComponent product={JSON.parse(props.product)} />
      <Recommendation products={JSON.parse(props.recommendation)} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;

  const client = Client.buildClient({
    domain: "nexttestapp.myshopify.com",
    storefrontAccessToken: "f13d038748e2df2e871efc59da57ffb3",
  });

  const product_item = await client.product.fetch(
    `gid://shopify/Product/${id}`
  );

  const recommendation = await client.product.fetchRecommendations(
    `gid://shopify/Product/${id}`
  );

  return {
    props: {
      product: JSON.stringify(product_item),
      recommendation: JSON.stringify(recommendation),
    },
  };
}

export default Product;
