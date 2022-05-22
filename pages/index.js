import dynamic from "next/dynamic";
import Intro from "../Components/Home/Intro";
import Layout from "../Components/Layout";
const Features = dynamic(() => import("../Components/Home/Features"));
const MenSection = dynamic(() => import("../Components/Home/MenSection"));
const WomenSection = dynamic(() => import("../Components/Home/WomenSection"));
const Featured = dynamic(() => import("../Components/Home/Featured"));
const JoinNow = dynamic(() => import("../Components/Home/JoinNow"));
export default function Home() {
  return (
    <Layout title="Home">
      <Intro />
      <Featured />
      <Features />
      <MenSection />
      <JoinNow />
      <WomenSection />
    </Layout>
  );
}
