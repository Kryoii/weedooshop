import Featured from "../Components/Home/Featured";
import Features from "../Components/Home/Features";
import Intro from "../Components/Home/Intro";
import JoinNow from "../Components/Home/JoinNow";
import MenSection from "../Components/Home/MenSection";
import WomenSection from "../Components/Home/WomenSection";
import Layout from "../Components/Layout";
import Client from "shopify-buy";
export default function Home(props) {
  const { menSection } = props;

  return (
    <Layout title="Home">
      <Intro />
      <Featured />
      <Features />
      <MenSection items={menSection} />
      <JoinNow />
      <WomenSection />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const client = Client.buildClient({
    domain: "nexttestapp.myshopify.com",
    storefrontAccessToken: "b79f30d31076cf3e3c77255d8ba8801c",
  });

  const menSection = await client.product.fetchQuery({
    query: "tag:'mens_tshirt'",
    first: 8,
  });

  return {
    props: {
      menSection: JSON.stringify(menSection),
    }, // will be passed to the page component as props
  };
}
