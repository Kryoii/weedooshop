import React from "react";
import Layout from "../../Components/Layout";
import Header from "./Header";
import MenSection from "./MenSection";
import MenShop from "./utils";
import Client from "shopify-buy";
function index(props) {
  return (
    <MenShop>
      <Layout title="Mens">
        <Header />
        <MenSection products={props.menSection} />
      </Layout>
    </MenShop>
  );
}

export async function getServerSideProps(context) {
  const client = Client.buildClient({
    domain: "nexttestapp.myshopify.com",
    storefrontAccessToken: "f13d038748e2df2e871efc59da57ffb3",
  });

  const menSection = await client.product.fetchQuery({
    query: "tag:'mens_tshirt'",
  });

  return {
    props: {
      menSection: JSON.parse(JSON.stringify(menSection)),
    }, // will be passed to the page component as props
  };
}

export default index;
