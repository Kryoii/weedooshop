import CircularProgress from "@mui/material/CircularProgress";
import dynamic from "next/dynamic";
import Intro from "../Components/Home/Intro";
import Layout from "../Components/Layout";
const Features = dynamic(() => import("../Components/Home/Features"), {
  loading: () => <CircularProgress />,
});
const MenSection = dynamic(() => import("../Components/Home/MenSection"), {
  loading: () => <CircularProgress />,
});
const WomenSection = dynamic(() => import("../Components/Home/WomenSection"), {
  loading: () => <CircularProgress />,
});
const Featured = dynamic(() => import("../Components/Home/Featured"), {
  loading: () => <CircularProgress />,
});
const JoinNow = dynamic(() => import("../Components/Home/JoinNow"), {
  loading: () => <CircularProgress />,
});
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
