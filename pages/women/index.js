import React from "react";
import Layout from "../../Components/Layout";
import Header from "./Header";
import WomenSection from "./WomenSection";
import WomenShop from "./utils";

function index() {
  return (
    <WomenShop>
      <Layout title="Womens">
        <Header />
        <WomenSection />
      </Layout>
    </WomenShop>
  );
}

export default index;
