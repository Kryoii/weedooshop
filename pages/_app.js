import Utility from "../Components/Utility";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Utility>
      <Component {...pageProps} />
    </Utility>
  );
}

export default MyApp;
