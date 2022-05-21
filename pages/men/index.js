import React from "react";
import Layout from "../../Components/Layout";
import Header from "./Header";
import MenSection from "./MenSection";
import MenShop from "./utils";
import Client from "shopify-buy";
import { useState } from "react";
function Index(props) {
  const [products, SetProducts] = useState(props.menSection);
  const [currentCount, SetCurrentCount] = useState(8);
  const [sort, SetSort] = useState("");
  const [reverse, SetReverse] = useState(false);

  const client = Client.buildClient({
    domain: "nexttestapp.myshopify.com",
    storefrontAccessToken: "b79f30d31076cf3e3c77255d8ba8801c",
  });

  const LoadMore = async () => {
    if (products.length === currentCount - 4) {
      await client.product
        .fetchQuery({
          query: "tag:'mens_tshirt'",
          first: currentCount,
          sortKey: sort,
          reverse: reverse,
        })
        .then((a) => {
          SetProducts(a);
          SetCurrentCount(currentCount + 4);
        });
    }
  };

  const SortBy = async (Sort__, Reverse__ = false) => {
    SetSort(Sort__);
    SetReverse(Reverse__);
    await client.product
      .fetchQuery({
        query: "tag:'mens_tshirt'",
        first: products.length,

        sortKey: Sort__,
        reverse: Reverse__,
      })
      .then((a) => {
        SetProducts(a);
      });
  };

  return (
    <MenShop>
      <Layout title="Mens">
        <Header total={products.length} SortBy={SortBy} />
        <MenSection
          products={products}
          LoadMore={LoadMore}
          currentCount={currentCount}
        />
      </Layout>
    </MenShop>
  );
}

export async function getServerSideProps(context) {
  const client = Client.buildClient({
    domain: "nexttestapp.myshopify.com",
    storefrontAccessToken: "b79f30d31076cf3e3c77255d8ba8801c",
  });

  const menSection = await client.product.fetchQuery({
    query: "tag:'mens_tshirt'",
    first: 4,
  });

  return {
    props: {
      menSection: JSON.parse(JSON.stringify(menSection)),
    }, // will be passed to the page component as props
  };
}

export default Index;
