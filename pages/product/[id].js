import React from "react";
import Layout from "../../Components/Layout";
import ProductComponent from "./Product";
import Recommendation from "./recommendation";
import Client from "shopify-buy";
function Product(props) {
  return (
    <Layout title={props.title} description={props.description}>
      <ProductComponent
        stock={props.stock}
        priceOG={props.price}
        currentColor={props.currentColor}
        currentSize={props.currentSize}
        imageSlide={props.images}
        title={props.title}
        description={props.description}
        colors={props.colors}
        sizes={props.sizes}
        productID={props.productID}
      />
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

  const selectedVariant = await client.product.helpers.variantForOptions(
    product_item,
    {
      Size: product_item.options[0].values[0].value,
      Color: product_item.options[1].values[0].value,
    }
  );

  return {
    props: {
      stock: selectedVariant.sku,
      currentSize: product_item.options[0].values[0].value,
      currentColor: product_item.options[1].values[0].value,
      price: product_item.variants[0].price,
      images: JSON.parse(JSON.stringify(product_item.images)),
      colors: JSON.parse(JSON.stringify(product_item.options[1])),
      sizes: JSON.parse(JSON.stringify(product_item.options[0])),
      title: product_item.title,
      description: product_item.description,
      recommendation: JSON.stringify(recommendation),
      productID: id,
    },
  };
}

export default Product;
