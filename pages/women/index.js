import React from "react";
import Layout from "../../Components/Layout";
import Header from "../../Components/Women/Header";
import dynamic from "next/dynamic";
const WomenSection = dynamic(() =>
  import("../../Components/Women/WomenSection")
);

import Client from "shopify-buy";
import { useState } from "react";
function Index(props) {
  const [products, SetProducts] = useState(props.womenSection);
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
          console.log(a);
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
  const [toggles, setToggles] = React.useState({
    shortSleeve: false,
    longSleeve: false,
    hats: false,
  });
  const SetSelect = (type) => {
    switch (type) {
      case "Short Sleeve":
        setToggles((prev) => ({
          ...prev,
          shortSleeve: !prev.shortSleeve,
        }));
        break;
      case "Long Sleeve":
        setToggles((prev) => ({
          ...prev,
          longSleeve: !prev.longSleeve,
        }));
        break;
      case "Hats":
        setToggles((prev) => ({
          ...prev,
          hats: !prev.hats,
        }));
        break;
    }
  };

  return (
    <Layout title="Womens">
      <Header
        total={products.length}
        SortBy={SortBy}
        toggles={toggles}
        SetSelect={SetSelect}
      />
      <WomenSection
        products={products}
        LoadMore={LoadMore}
        currentCount={currentCount}
      />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const client = Client.buildClient({
    domain: "nexttestapp.myshopify.com",
    storefrontAccessToken: "b79f30d31076cf3e3c77255d8ba8801c",
  });

  const womenSection = await client.product.fetchQuery({
    query: "tag:'mens_tshirt'",
    first: 4,
  });

  return {
    props: {
      womenSection: JSON.parse(JSON.stringify(womenSection)),
    }, // will be passed to the page component as props
  };
}

export default Index;
